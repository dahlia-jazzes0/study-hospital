import { memo } from 'react';
import { DepartmentCheckList } from '../_ui/department-check-list';
import utilStyles from '../department-utils.module.css';
import styles from './department-internal-when-section.module.css';

export const DepartmentInternalWhenSection = memo(() => {
  return (
    <section className={`${utilStyles.container} ${styles.container}`}>
      <h3 className={styles.title}>
        이럴 때 <span className={utilStyles.mainColor}>한방내과</span>를
        찾으세요!
      </h3>
      <DepartmentCheckList items={items} />
    </section>
  );
});

const items = [
  { id: 1, content: '만성 소화불량, 위염, 과민성 대장증후군 등 소화기 질환' },
  { id: 2, content: '만성 기침, 기관지염, 알레르기성 비염 등 호흡기 질환' },
  { id: 3, content: '피로, 면역력 저하, 수면장애 등 만성 피로 증후군' },
  { id: 4, content: '갱년기 증상, 생리불순, 냉증 등 여성 건강 문제' },
  { id: 5, content: '원인불명의 만성 통증이나 체질 개선이 필요한 경우' },
];
