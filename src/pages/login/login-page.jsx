import { Link, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import { LogoView as Logo } from '../../shared/ui/logo/logo-view.jsx';
import { useAuth } from '../../contexts/auth-context.jsx';
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

  const handleLogin = async () => {
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
        setErrorMessage(result.error);
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
        <section className={styles.loginInputBox}>
          <h2 className={styles.srOnly}>로그인창</h2>
          <label htmlFor="userId">
            <input
              type="text"
              placeholder="아이디"
              id="userId"
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
              className={styles.userPw}
              value={userPw}
              onChange={(e) => setUserPw(e.target.value)}
            />
            <button
              className={styles.showPwdBtn}
              onClick={handlePw}
              type="button"
            >
              <img
                src={showPassword ? './images/eye.png' : './images/eye-off.png'}
                alt="비밀번호 표시/비활성화 아이콘"
              />
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
        </section>
        <button className={styles.loginSubmit} onClick={handleLogin}>
          로그인
        </button>
        <section className={styles.findIdPw}>
          <h2 className={styles.srOnly}>아이디 비밀번호 찾기</h2>
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
