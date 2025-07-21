import { memo } from 'react';
import utilStyles from '../department-utils.module.css';
import styles from './department-pediatrics-overview-section.module.css';

export const DepartmentPediatricsOverviewSection = memo(() => {
  return (
    <div className={utilStyles.container}>
      <section className={styles.container}>
        <img
          className={styles.thumbnail}
          src="images/departments/pediatrics/korean-kids-smiling-on-bed.jpg"
          alt=""
        />
        <div className={styles.content}>
          <div>
            <h3 className={styles.title}>아이의 몸과 마음을 함께</h3>
            <p className={styles.description}>
              건강한 성장을 위한 부작용 없는 한방 돌봄
            </p>
          </div>
        </div>
      </section>
    </div>
  );
});
