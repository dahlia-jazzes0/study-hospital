import { memo } from 'react';
import utilStyles from '../department-utils.module.css';
import { DepartmentBariatricOverviewSection } from './department-bariatric-overview-section';
import styles from './department-bariatric-page.module.css';
import { DepartmentBariatricQnaSection } from './department-bariatric-qna-section';
import { DepartmentBariatricSolutionSection } from './department-bariatric-solution-section';
import { DepartmentBariatricWhenSection } from './department-bariatric-when-section';

export const DepartmentBariatricPage = memo(() => {
  return (
    <article className={styles.container}>
      <h2 className={`${utilStyles.container} ${styles.title}`}>
        비만체형클리닉
      </h2>
      <DepartmentBariatricOverviewSection />
      <DepartmentBariatricSolutionSection />
      <DepartmentBariatricWhenSection />
      <DepartmentBariatricQnaSection />
    </article>
  );
});
