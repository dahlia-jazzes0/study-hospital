import { useAuth } from '@/shared/auth/auth-context';
import { useCallback, useEffect, useState } from 'react';

// 로그인 상태 체크
export function useLoginCheck() {
  const [isLogin, setIsLogin] = useState(false);
  const auth = useAuth();

  const loginCheck = useCallback((auth) => {
    if (auth.isAuthenticated) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  useEffect(() => {
    loginCheck(auth);
  }, [auth, loginCheck]);
  return { isLogin };
}
