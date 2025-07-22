import { useState } from 'react';
import { Link } from 'react-router';

import { LogoView as Logo } from '../../shared/ui/logo/logo-view.jsx';
import styles from './login-page.module.css';

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handlePw = () => {
    setShowPassword((value) => !value);
  };

  const handleLogin = async () => {
    try {
      setErrorMessage('');

      const response = await fetch(
        'https://hospital-api.dahlia-jazzes0.workers.dev/api/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: userId,
            password: userPw,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('로그인 실패');
      }

      const data = await response.json();

      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);
    } catch (error) {
      setErrorMessage('아이디 또는 비밀번호가 올바르지 않습니다.');
      console.error('로그인 에러:', error);
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
            <input type="checkbox" id="remember" />
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
