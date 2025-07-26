import { createContext, useContext } from 'react';

export const AuthContext = createContext();

/**
 * @typedef {object} Auth
 * @prop {boolean} isAuthenticated 로그인 여부
 * @prop {(userId: string, password: string) => Promise<any>} login 로그인 함수
 * @prop {() => void} logout 로그아웃 함수
 */

/**
 * Auth 관련 커스텀 훅입니다.
 * @returns {Auth}
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth는 AuthProvider 내부에서만 사용할 수 있습니다.');
  }
  return context;
};
