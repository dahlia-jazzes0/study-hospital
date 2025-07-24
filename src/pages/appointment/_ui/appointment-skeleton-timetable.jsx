import styles from './appointment-skeleton-timetable.module.css';

export function SkeletonTimeTable() {
  return (
    <li>
      <div className={styles.skeletonTimeTable}>
        <div className={styles.skeletonTimeTableText}></div>
      </div>
    </li>
  );
}
