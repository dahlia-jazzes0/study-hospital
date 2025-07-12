import { Link } from 'react-router-dom';
import styles from '@/shared/ui/header-view.module.css';
import { NavigationView } from '@/shared/ui/navigation-view.jsx';

export function HeaderView() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerWrap}>
        <h1>
          <Link to="/">
            <img
              src="public/images/logo.svg"
              alt="모두한의원"
              className={styles.logo}
            />
          </Link>
        </h1>

        <NavigationView />

        <div className={styles.authSection}>
          <Link to="/login" className={styles.membershipBtn}>
            멤버쉽
          </Link>
        </div>
      </div>
    </header>
  );
}
