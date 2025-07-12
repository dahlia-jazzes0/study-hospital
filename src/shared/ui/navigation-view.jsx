import { Link, useLocation } from 'react-router-dom';
import styles from '@/shared/ui/navigation-view.module.css';

export function NavigationView() {
  const location = useLocation();
  const navigationItems = [
    { label: '진료과목', path: '/departments' },
    { label: '의료진소개', path: '/doctors' },
    { label: '치료후기', path: '/review' },
    { label: '진료예약', path: '/booking' },
    { label: '병원안내', path: '/info' },
  ];

  return (
    <nav className={styles.headerNav}>
      <ul className={styles.navList}>
        {navigationItems.map((item, index) => (
          <li key={index} className={styles.navItem}>
            <Link
              to={item.path}
              className={`${styles.navLink} ${
                location.pathname === item.path ? styles.active : ''
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
