import { memo } from 'react';
import utilStyles from '../department-utils.module.css';
import { DepartmentInternalHowSection } from './department-internal-how-section';
import { DepartmentInternalOverviewSection } from './department-internal-overview-section';
import styles from './department-internal-page.module.css';
import { DepartmentInternalStatsSection } from './department-internal-stats-section';
import { DepartmentInternalWhenSection } from './department-internal-when-section';
import { DepartmentInternalWhereSection } from './department-internal-where-section';

export const DepartmentInternalPage = memo(() => {
  return (
    <article className={styles.container}>
      <h2 className={`${utilStyles.container} ${styles.title}`}>한방내과</h2>
      <DepartmentInternalOverviewSection />
      <DepartmentInternalWhereSection />
      <DepartmentInternalWhenSection />
      <DepartmentInternalStatsSection />
      <DepartmentInternalHowSection />
    </article>
  );
});
