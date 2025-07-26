import { memo } from 'react';
import utilStyles from '../department-utils.module.css';
import { DepartmentOrthopedicHowSection } from './department-orthopedic-how-section';
import { DepartmentOrthopedicInsuranceSection } from './department-orthopedic-insurance-section';
import { DepartmentOrthopedicOverviewSection } from './department-orthopedic-overview-section';
import styles from './department-orthopedic-page.module.css';
import { DepartmentOrthopedicStatsSection } from './department-orthopedic-stats-section';
import { DepartmentOrthopedicWhatSection } from './department-orthopedic-what-section';
import { DepartmentOrthopedicWhereSection } from './department-orthopedic-where-section';

export const DepartmentOrthopedicPage = memo(() => {
  return (
    <article className={styles.container}>
      <h2 className={`${utilStyles.container} ${styles.title}`}>
        한방정형외과
      </h2>
      <DepartmentOrthopedicOverviewSection />
      <DepartmentOrthopedicWhereSection />
      <DepartmentOrthopedicWhatSection />
      <DepartmentOrthopedicStatsSection />
      <DepartmentOrthopedicHowSection />
      <DepartmentOrthopedicInsuranceSection />
    </article>
  );
});
