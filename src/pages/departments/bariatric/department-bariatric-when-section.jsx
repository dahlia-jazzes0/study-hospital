import { memo } from 'react';
import { DepartmentCheckList } from '../_ui/department-check-list';
import utilStyles from '../department-utils.module.css';
import styles from './department-bariatric-when-section.module.css';

export const DepartmentBariatricWhenSection = memo(() => {
  return (
    <section className={styles.container}>
      <div className={utilStyles.container}>
        <h3 className={styles.title}>
          이럴 때 <span className={styles.titleHighlight}>비만체형클리닉</span>
          를 찾으세요!
        </h3>
        <DepartmentCheckList items={items} />
      </div>
    </section>
  );
});

const items = [
  { id: 1, content: '반복적인 요요 현상으로 체중 감량이 어려운 경우' },
  { id: 2, content: '복부비만, 하체비만 등 특정 부위 비만이 고민될 때' },
  {
    id: 3,
    content: '다이어트를 해도 피로, 소화불량, 생리불순 등이 함께 나타날 때',
  },
  {
    id: 4,
    content:
      '체형 불균형(골반 틀어짐, 자세 불량 등)으로 통증이나 불편함이 있는 경우',
  },
  {
    id: 5,
    content: '건강검진에서 고지혈증, 지방간 등 대사 이상 소견을 받은 경우',
  },
];
