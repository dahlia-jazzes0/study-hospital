import { Link } from 'react-router';
import { NavigationView } from '@/shared/ui/navigation-view.jsx';
import { LogoView } from '@/shared/ui/logo/logo-view.jsx';
import { UserRound } from 'lucide-react';
import { useAuth } from '@/shared/auth/auth-context.jsx';
import styles from './header-view.module.css';

export function HeaderView() {
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

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
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className={`${styles.logoutBtn} ${styles.authBtn}`}
            >
              로그아웃
            </button>
          ) : (
            <Link
              to="/login"
              className={`${styles.membershipBtn} ${styles.authBtn}`}
            >
              <UserRound className={styles.userIcon} /> 멤버쉽
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
