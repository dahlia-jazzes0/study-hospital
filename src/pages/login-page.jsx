import { useState } from 'react';
import { Link } from 'react-router';
import './login-page.css';

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handlePw = () => {
    setShowPassword((value) => !value);
  };

  return (
    <div className="loginPage">
      <section className="loginPageHeader">
        <h2 className="logo">
          <img src="logo.png" alt="모두한의원 로고" />
        </h2>

        <p>모두한의원 홈페이지에 방문하신 걸 환영합니다</p>
      </section>

      <div className="loginPageMain">
        <section className="loginInputBox">
          <h2 className="sr-only">로그인창</h2>

          <label htmlFor="userId">
            <input type="text" placeholder="아이디" id="userId" />
          </label>

          <label htmlFor="userPw" className="userPwBox">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="비밀번호"
              id="userPw"
            />
            <button className="showPwdBtn" onClick={handlePw}>
              <img
                src={showPassword ? 'pwd-eye-1.png' : 'pwd-eye-2.png'}
                alt="비밀번호 표시/비활성화 아이콘"
              />
            </button>
          </label>

          <label htmlFor="remember" className="remember">
            <input type="checkbox" id="remember" />
            아이디 저장
          </label>
        </section>

        <button className="loginSubmit">로그인</button>

        <section className="findIdPw">
          <h2 className="sr-only">아이디 비밀번호 찾기</h2>

          <Link to="/findId">아이디 찾기</Link>
          <span> | </span>
          <Link to="/findPw">비밀번호 찾기</Link>
        </section>

        <Link
          to="/join"
          className="joinBtn"
          onClick={() => window.scrollTo(0, 0)}
        >
          회원가입
        </Link>
      </div>
    </div>
  );
}
