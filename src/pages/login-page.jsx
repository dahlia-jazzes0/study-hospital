import { useState } from 'react';
import { Link } from 'react-router';

import styles from './login-page.module.css';

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handlePw = () => {
    setShowPassword((value) => !value);
  };

  return (
    <div className={styles.loginPage}>
      <section className={styles.loginPageHeader}>
        <h2 className={styles.logo}>
          <img src="logo.png" alt="모두한의원 로고" />
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
            />
          </label>

          <label htmlFor="userPw" className={styles.userPwBox}>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="비밀번호"
              id="userPw"
              className={styles.userPw}
            />
            <button className={styles.showPwdBtn} onClick={handlePw}>
              <img
                src={showPassword ? 'pwd-eye-1.png' : 'pwd-eye-2.png'}
                alt="비밀번호 표시/비활성화 아이콘"
              />
            </button>
          </label>

          <label htmlFor="remember" className={styles.remember}>
            <input type="checkbox" id="remember" />
            아이디 저장
          </label>
        </section>

        <button className={styles.loginSubmit}>로그인</button>

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
