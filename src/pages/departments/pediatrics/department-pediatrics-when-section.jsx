import { memo } from 'react';
import { DepartmentCheckList } from '../_ui/department-check-list';
import utilStyles from '../department-utils.module.css';
import styles from './department-pediatrics-when-section.module.css';

export const DepartmentPediatricsWhenSection = memo(() => {
  return (
    <section className={`${utilStyles.container} ${styles.container}`}>
      <h3 className={styles.title}>
        이럴 때 <span className={utilStyles.mainColor}>한방소아과</span>를
        찾으세요!
      </h3>
      <DepartmentCheckList items={items} />
    </section>
  );
});

const items = [
  { id: 1, content: '잦은 감기, 기침, 비염, 천식 등 호흡기 질환' },
  { id: 2, content: '소화불량, 복통, 변비, 설사 등 소화기 문제' },
  { id: 3, content: '밤에 자주 깨거나 잘 울고 보채는 경우' },
  { id: 4, content: '알레르기성 피부염, 아토피, 두드러기' },
  { id: 5, content: '성장부진, 허약 체질, 면역력 저하' },
];
