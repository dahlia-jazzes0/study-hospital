import { Link } from 'react-router';
import { NavigationView } from '@/shared/ui/navigation-view.jsx';
import styles from './header-view.module.css';

export function HeaderView() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerWrap}>
        <h1>
          <Link to="/">
            <img
              src="images/logo.png"
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
