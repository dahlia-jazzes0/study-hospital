import { memo } from 'react';
import utilStyles from '../department-utils.module.css';
import styles from './department-bariatric-overview-section.module.css';

export const DepartmentBariatricOverviewSection = memo(() => {
  return (
    <div className={utilStyles.container}>
      <section className={styles.container}>
        <img
          className={styles.thumbnail}
          src="images/departments/bariatric/slim-waist-body-check.jpg"
          alt=""
        />
        <div className={styles.content}>
          <div>
            <h3 className={styles.title}>
              체형을 바꾸는 것은 건강을 바꾸는 일입니다
            </h3>
            <p className={styles.description}>
              체질에 맞게, 요요 없이, 건강하게
            </p>
          </div>
        </div>
      </section>
    </div>
  );
});
