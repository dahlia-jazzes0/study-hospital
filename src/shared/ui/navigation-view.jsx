import { NavLink } from 'react-router';
import styles from './navigation-view.module.css';

export function NavigationView() {
  const navigationItems = [
    { label: '진료과목', path: '/departments' },
    { label: '의료진소개', path: '/doctors' },
    { label: '치료후기', path: '/review-page' },
    { label: '진료예약', path: '/appointment' },
    { label: '병원안내', path: '/info' },
  ];

  return (
    <nav className={styles.headerNav}>
      <ul className={styles.navList}>
        {navigationItems.map((item) => (
          <li key={item.path} className={styles.navItem}>
            <NavLink to={item.path} className={styles.navLink}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
