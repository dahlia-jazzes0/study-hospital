import { Link } from 'react-router';
import styles from './footer-view.module.css';

export function FooterView() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerWrap}>
        <nav className={styles.footerNav}>
          <ul>
            <li>
              <Link to="/about">모두한의원 소개</Link>
            </li>
            <li>
              <Link to="/privacy">개인정보처리방침</Link>
            </li>
            <li>
              <Link to="/terms">이용약관</Link>
            </li>
            <li>
              <Link to="/email-policy">이메일주소무단수집거부</Link>
            </li>
          </ul>
        </nav>

        <div className={styles.footerInfo}>
          <div className={styles.footerLogo}>
            <img src="images/logo-footer.png" alt="모두한의원" />
          </div>

          <div className={styles.footerDetails}>
            <div>
              사업자 등록번호 : 123-45-67890 | 통신판매업 신고번호:
              제2024-서울성동-00123호
            </div>
            <div>전화번호: 02-1234-5678 | 전화번호: 02-1234-5678</div>
            <div>주소: 서울시 성동구 무학봉길 21, 1~3층</div>
          </div>

          <div className={styles.socialLinks}>
            <a
              href="#"
              className={styles.socialLink}
              aria-label="인스타그램"
            ></a>
            <a href="#" className={styles.socialLink} aria-label="블로그"></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
