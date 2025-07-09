import { useState } from 'react';
import { useNavigate } from 'react-router';
import './login-page.css';

export function LoginPage() {
  const moveToJoinPage = useNavigate();
  const [pwdImg, setPwdImg] = useState('pwd-eye-2.png');
  const [showPassword, setShowPassword] = useState(false);
  const handleJoinClick = () => {
    moveToJoinPage('/join');
  };

  const handlePw = () => {
    if (showPassword) {
      setPwdImg('pwd-eye-2.png');
      setShowPassword(false);
    } else {
      setPwdImg('pwd-eye-1.png');
      setShowPassword(true);
    }
  };

  return (
    <div className="loginPage">
      <section className="loginPageHeader">
        <h1 className="logo">
          <img src="logo.png" alt="모두한의원 로고" />
        </h1>

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
              <img src={pwdImg} alt="비밀번호 표시/숨김 아이콘" />
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

          <a href="#">아이디 찾기</a>
          <span> | </span>
          <a href="#">비밀번호 찾기</a>
        </section>

        <button className="joinBtn" onClick={handleJoinClick}>
          회원가입
        </button>
      </div>
    </div>
  );
}
