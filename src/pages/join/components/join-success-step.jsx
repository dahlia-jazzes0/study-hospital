import styles from '../join-page.module.css';
import { Link } from 'react-router';

export const JoinSuccessStep = () => {
  return (
    <div>
      <section className={styles.joinSuccess}>
        <h2 className="sr-only">회원가입 성공</h2>
        <p>회원가입을 진심으로 환영합니다</p>
        <p>
          모두한의원은 언제나 환자의 건강과 함께 하겠습니다.
          <span>문의사항은 언제든지 고객센터로 연락주세요</span>
        </p>
      </section>

      <section className={styles.goLinkBtn}>
        <h2 className="sr-only">로그인,메인 페이지 이동</h2>
        <Link to="/login" className={styles.goLoginBtn}>
          로그인
        </Link>
        <Link to="/" className={styles.goMainBtn}>
          메인으로
        </Link>
      </section>
    </div>
  );
};
