import styles from './appointment-page.module.css';

export function SkeletonTimeTable() {
  const skeletonTimeTables = Array.from({ length: 20 }, (_, index) => index);

  return (
    <ul className={styles.timeTable}>
      {skeletonTimeTables.map((index) => (
        <li key={index}>
          <div className={styles.skeletonTimeTable}>
            <div className={styles.skeletonTimeTableText}></div>
          </div>
        </li>
      ))}
    </ul>
  );
}
