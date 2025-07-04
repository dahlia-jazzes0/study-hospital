export function LoginPage() {
  return (
    <>
      <header>
        <h1>
          <img
            src="logo.png"
            alt="모두한의원 로고"
            style={{ width: '600px' }}
          />
        </h1>

        <p>모두한의원 홈페이지에 방문하신 걸 환영합니다</p>
      </header>

      <main>
        <label htmlFor="userId">
          <input type="text" placeholder="아이디" id="userId" />
        </label>

        <label htmlFor="userPw">
          <input type="password" placeholder="비밀번호" id="userPw" />
        </label>

        <label htmlFor="remember">
          <input type="checkbox" id="remember" />
          아이디 저장
        </label>

        <button>로그인</button>

        <section>
          <h2 className="sr-only">{/* --아이디 비밀번호 찾기 */}</h2>

          <a href="#">아이디 찾기</a>
          <span> | </span>
          <a href="#">비밀번호 찾기</a>
        </section>

        <button>회원가입</button>
      </main>
    </>
  );
}
