import { memo } from 'react';
import utilStyles from '../department-utils.module.css';
import { DepartmentGynecologyHowSection } from './department-gynecology-how-section';
import { DepartmentGynecologyInfoSection } from './department-gynecology-info-section';
import { DepartmentGynecologyOverviewSection } from './department-gynecology-overview-section';
import styles from './department-gynecology-page.module.css';
import { DepartmentGynecologyWhenSection } from './department-gynecology-when-section';
import { DepartmentGynecologyWhereSection } from './department-gynecology-where-section';

export const DepartmentGynecologyPage = memo(() => {
  return (
    <article className={styles.container}>
      <h2 className={`${utilStyles.container} ${styles.title}`}>한방부인과</h2>
      <DepartmentGynecologyOverviewSection />
      <DepartmentGynecologyWhereSection />
      <DepartmentGynecologyWhenSection />
      <DepartmentGynecologyHowSection />
      <DepartmentGynecologyInfoSection />
    </article>
  );
});
