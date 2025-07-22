import styles from './appointment-skeleton-card.module.css';

export function SkeletonCard() {
  return (
    <li className={styles.skeletonCard}>
      <div className={styles.skeletonImage}></div>
      <div className={styles.skeletonCardDescription}>
        <div className={styles.skeletonText}></div>
        <div className={styles.skeletonText}></div>
        <div className={styles.skeletonDepartment}></div>
        <div className={styles.skeletonDepartment}></div>
      </div>
    </li>
  );
}
