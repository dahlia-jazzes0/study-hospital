import { NavLink, useLocation } from 'react-router-dom';
import styles from './navigation-view.module.css';

export function NavigationView() {
  const location = useLocation();
  const navigationItems = [
    { label: '진료과목', path: '/departments' },
    { label: '의료진소개', path: '/doctors' },
    { label: '치료후기', path: '/review-page' },
    { label: '진료예약', path: '/booking' },
    { label: '병원안내', path: '/info' },
  ];

  return (
    <nav className={styles.headerNav}>
      <ul className={styles.navList}>
        {navigationItems.map((item, index) => (
          <li key={index} className={styles.navItem}>
            <NavLink
              to={item.path}
              className={`${styles.navLink} ${
                location.pathname === item.path ? styles.active : ''
              }`}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
