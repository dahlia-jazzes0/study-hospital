import { memo } from 'react';
import { DepartmentCheckList } from '../_ui/department-check-list';
import utilStyles from '../department-utils.module.css';
import styles from './department-gynecology-when-section.module.css';

export const DepartmentGynecologyWhenSection = memo(() => {
  return (
    <section className={`${utilStyles.container} ${styles.container}`}>
      <h3 className={styles.title}>이럴 때 한방부인과를 찾으세요!</h3>
      <DepartmentCheckList items={items} />
    </section>
  );
});

const items = [
  { id: 1, content: '생리통, 생리불순, 다낭성난소증후군 등 월경 관련 문제' },
  { id: 2, content: '임신 전 체질 개선, 난임 치료, 산전·산후 관리' },
  { id: 3, content: '냉증, 질염, 하복부 냉감 등 생식기계 기능 약화' },
  { id: 4, content: '갱년기 증상 (안면홍조, 불면, 우울감, 피로 등)' },
  { id: 5, content: '스트레스로 인한 생리 이상, 소화장애, 체력 저하' },
];
