import { memo } from 'react';
import utilStyles from '../department-utils.module.css';
import styles from './department-internal-overview-section.module.css';

export const DepartmentInternalOverviewSection = memo(() => {
  return (
    <div className={utilStyles.container}>
      <section className={styles.container}>
        <div className={styles.content}>
          <div>
            <h3 className={styles.title}>전통과 과학의 조화로운 만남</h3>
            <p className={styles.description}>
              자연의 이치로 몸을 다스리는 건강한 선택
            </p>
          </div>
        </div>
        <img
          className={styles.thumbnail}
          src="images/departments/internal/oriental-medicine-digestion-check.jpg"
          alt=""
        />
      </section>
    </div>
  );
});
