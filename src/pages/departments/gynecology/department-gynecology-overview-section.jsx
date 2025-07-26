import { memo } from 'react';
import utilStyles from '../department-utils.module.css';
import styles from './department-gynecology-overview-section.module.css';

export const DepartmentGynecologyOverviewSection = memo(() => {
  return (
    <div className={utilStyles.container}>
      <section className={styles.container}>
        <img
          className={styles.thumbnail}
          src="images/departments/gynecology/women-health-korean-medicine.jpg"
          alt=""
        />
        <div className={styles.content}>
          <div>
            <h3 className={styles.title}>여성을 위한 자연의학적 치유</h3>
            <p className={styles.description}>
              여성의 몸과 마음, 그 균형을 회복하는 섬세한 치료
            </p>
          </div>
        </div>
      </section>
    </div>
  );
});
