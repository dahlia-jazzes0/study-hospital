import { Outlet } from 'react-router';
import styles from './review-page.module.css';

export function ReviewLayout() {
  return (
    <>
      <section
        className={styles.bannerSection}
        aria-label="메인 배너"
      ></section>
      <Outlet />
    </>
  );
}
