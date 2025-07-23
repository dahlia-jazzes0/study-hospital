import { Link, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import { LogoView as Logo } from '@/shared/ui/logo/logo-view.jsx';
import { Eye, EyeOff } from 'lucide-react';
import { useAuth } from '@/shared/auth/auth-context.jsx';
import styles from './login-page.module.css';

export function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [remember, setRemember] = useState(false);
  const { login } = useAuth();

  useEffect(() => {
    const savedId = localStorage.getItem('savedUserId');
    if (savedId) {
      setUserId(savedId);
      setRemember(true);
    }
  }, []);

  const handlePw = () => {
    setShowPassword((value) => !value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId || !userPw) {
      setErrorMessage('아이디와 비밀번호를 입력해주세요.');
      return;
    }

    setErrorMessage('');

    try {
      const result = await login(userId, userPw);
      if (result.success) {
        if (remember) {
          localStorage.setItem('savedUserId', userId);
        } else {
          localStorage.removeItem('savedUserId');
        }

        navigate('/');
        window.scrollTo(0, 0);
      } else {
        setErrorMessage('아이디와 비밀번호를 입력해주세요.');
      }
    } catch (err) {
      setErrorMessage('로그인 중 오류가 발생했습니다.');
      console.error(err);
    }
  };

  return (
    <div className={styles.loginPage}>
      <section className={styles.loginPageHeader}>
        <h2 className={styles.logo}>
          <Logo size={186} />
        </h2>
        <p>모두한의원 홈페이지에 방문하신 걸 환영합니다</p>
      </section>
      <div className={styles.loginPageMain}>
        <section>
          <h2 className="sr-only">로그인창</h2>
          <form className={styles.loginInputBox} onSubmit={handleSubmit}>
            <label htmlFor="userId">
              <input
                type="text"
                placeholder="아이디"
                id="userId"
                name="userId"
                className={styles.userId}
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
            </label>
            <label htmlFor="userPw" className={styles.userPwBox}>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="비밀번호"
                id="userPw"
                name="userPw"
                className={styles.userPw}
                value={userPw}
                onChange={(e) => setUserPw(e.target.value)}
              />
              <button
                className={styles.showPwdBtn}
                onClick={handlePw}
                type="button"
              >
                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </label>
            {errorMessage && <p className={styles.errorMsg}>{errorMessage}</p>}
            <label htmlFor="remember" className={styles.remember}>
              <input
                type="checkbox"
                id="remember"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              아이디 저장
            </label>
            <button className={styles.loginSubmit} type="submit">
              로그인
            </button>
          </form>
        </section>
        <section className={styles.findIdPw}>
          <h2 className="sr-only">아이디 비밀번호 찾기</h2>
          <Link to="/findId">아이디 찾기</Link>
          <span> | </span>
          <Link to="/findPw">비밀번호 찾기</Link>
        </section>
        <Link
          to="/join"
          className={styles.joinBtn}
          onClick={() => window.scrollTo(0, 0)}
        >
          회원가입
        </Link>
      </div>
    </div>
  );
}
