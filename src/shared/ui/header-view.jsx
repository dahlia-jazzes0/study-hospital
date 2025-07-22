import { Link } from 'react-router';
import { NavigationView } from '@/shared/ui/navigation-view.jsx';
import { LogoView } from '@/shared/ui/logo/logo-view.jsx';
import { UserRound } from 'lucide-react';
import styles from './header-view.module.css';

export function HeaderView() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerWrap}>
        <h1>
          <Link to="/">
            <LogoView size={68} />
          </Link>
        </h1>

        <NavigationView />

        <div className={styles.authSection}>
          <Link to="/login" className={styles.membershipBtn}>
            <UserRound className={styles.userIcon} /> 멤버쉽
          </Link>
        </div>
      </div>
    </header>
  );
}
