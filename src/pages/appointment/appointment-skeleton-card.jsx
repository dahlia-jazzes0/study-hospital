import styles from './appointment-page.module.css';

export function SkeletonCard() {
  return (
    <li className={styles.loadingCard} aria-label="의사 정보 로딩 중">
      <div className={styles.loadingImage}></div>
      <div className={styles.loadingCardDescription}>
        <div className={styles.loadingText}></div>
        <div className={styles.loadingText}></div>
        <div className={styles.loadingDepartment}></div>
        <div className={styles.loadingDepartment}></div>
      </div>
    </li>
  );
}
