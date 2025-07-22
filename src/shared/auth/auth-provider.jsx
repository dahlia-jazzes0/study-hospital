import { useRef, useState, useEffect, useCallback } from 'react';
import { AuthContext } from './auth-context';

export const AuthProvider = ({ children }) => {
  const accessTokenRef = useRef(null);
  const refreshTokenRef = useRef(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const clearTokens = useCallback(() => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    accessTokenRef.current = null;
    refreshTokenRef.current = null;
    setIsAuthenticated(false);
  }, []);

  const saveTokensToStorage = useCallback((accessToken, refreshToken) => {
    try {
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      accessTokenRef.current = accessToken;
      refreshTokenRef.current = refreshToken;
    } catch (error) {
      console.error(error);
    }
  }, []);

  const loadTokensFromStorage = useCallback(() => {
    try {
      const storedAccessToken = localStorage.getItem('accessToken');
      const storedRefreshToken = localStorage.getItem('refreshToken');
      if (storedAccessToken && storedRefreshToken) {
        accessTokenRef.current = storedAccessToken;
        refreshTokenRef.current = storedRefreshToken;
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error(error);
      clearTokens();
    }
  }, [clearTokens]);

  const refreshAccessToken = useCallback(async () => {
    const refreshToken = refreshTokenRef.current;
    if (!refreshToken) {
      throw new Error('리프레시 토큰이 없습니다.');
    }

    try {
      const response = await fetch(
        'https://hospital-api.dahlia-jazzes0.workers.dev/api/auth/refresh',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ refreshToken }),
        }
      );

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error?.message || '토큰 갱신 실패');
      }

      accessTokenRef.current = data.accessToken;
      refreshTokenRef.current = data.refreshToken;
      saveTokensToStorage(data.accessToken, data.refreshToken);

      return data.accessToken;
    } catch (error) {
      console.error(error);
      clearTokens();
      throw error;
    }
  }, [saveTokensToStorage, clearTokens]);

  const login = useCallback(
    async (userId, password) => {
      try {
        const response = await fetch(
          'https://hospital-api.dahlia-jazzes0.workers.dev/api/auth/login',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: userId, password }),
          }
        );

        const data = await response.json();
        if (!response.ok) {
          return {
            success: false,
            error: data.error?.message || '로그인에 실패했습니다.',
          };
        }

        accessTokenRef.current = data.accessToken;
        refreshTokenRef.current = data.refreshToken;
        setIsAuthenticated(true);
        saveTokensToStorage(data.accessToken, data.refreshToken);

        return { success: true };
      } catch (error) {
        console.error(error);
        return {
          success: false,
          error: '네트워크 오류가 발생했습니다.',
        };
      }
    },
    [saveTokensToStorage]
  );

  const logout = useCallback(() => {
    clearTokens();
  }, [clearTokens]);

  useEffect(() => {
    const token = accessTokenRef.current;
    if (!token) return;

    try {
      const tokenPayload = JSON.parse(atob(token.split('.')[1]));
      const expirationTime = tokenPayload.exp * 1000;
      const currentTime = Date.now();
      const timeUntilExpiry = expirationTime - currentTime;
      const refreshTime = timeUntilExpiry - 5 * 60 * 1000;

      if (refreshTime > 0) {
        const timer = setTimeout(() => {
          refreshAccessToken().catch(console.error);
        }, refreshTime);
        return () => clearTimeout(timer);
      } else {
        refreshAccessToken().catch(console.error);
      }
    } catch (error) {
      console.error(error);
    }
  }, [refreshAccessToken]);

  useEffect(() => {
    loadTokensFromStorage();
  }, [loadTokensFromStorage]);

  const value = {
    isAuthenticated,
    login,
    logout,
    getAccessToken: () => accessTokenRef.current,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
