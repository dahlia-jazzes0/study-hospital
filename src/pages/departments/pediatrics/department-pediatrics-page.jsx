import { memo } from 'react';
import utilStyles from '../department-utils.module.css';
import { DepartmentPediatricsHowSection } from './department-pediatrics-how-section';
import { DepartmentPediatricsOverviewSection } from './department-pediatrics-overview-section';
import styles from './department-pediatrics-page.module.css';
import { DepartmentPediatricsQnaSection } from './department-pediatrics-qna-section';
import { DepartmentPediatricsWhenSection } from './department-pediatrics-when-section';
import { DepartmentPediatricsWhereSection } from './department-pediatrics-where-section';

export const DepartmentPediatricsPage = memo(() => {
  return (
    <article className={styles.container}>
      <h2 className={`${utilStyles.container} ${styles.title}`}>한방소아과</h2>
      <DepartmentPediatricsOverviewSection />
      <DepartmentPediatricsWhereSection />
      <DepartmentPediatricsWhenSection />
      <DepartmentPediatricsHowSection />
      <DepartmentPediatricsQnaSection />
    </article>
  );
});
