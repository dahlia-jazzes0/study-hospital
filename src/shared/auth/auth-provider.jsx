import { useSyncExternalStore } from 'react';
import { accessTokenManager, login, logout } from './auth';
import { AuthContext } from './auth-context';

export const AuthProvider = ({ children }) => {
  const accessToken = useSyncExternalStore(
    (listener) => accessTokenManager.subscribe(listener),
    () => accessTokenManager.get()
  );
  const isAuthenticated = accessToken != null;

  const value = {
    isAuthenticated,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
