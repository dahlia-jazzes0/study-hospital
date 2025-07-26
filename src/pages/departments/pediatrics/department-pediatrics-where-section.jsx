import { memo } from 'react';
import utilStyles from '../department-utils.module.css';
import styles from './department-pediatrics-where-section.module.css';

export const DepartmentPediatricsWhereSection = memo(() => {
  return (
    <section className={`${utilStyles.container} ${styles.container}`}>
      <h3 className={styles.title}>
        <span className={utilStyles.mainColor}>한방소아과</span>는 어떤
        곳인가요?
      </h3>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <span className={`${utilStyles.mainColor} ${utilStyles.bold}`}>
            한방소아과
          </span>
          는 성장기 아이들의 발달과 면역력, 감기·소화기·피부 등 소아질환을 체질
          중심으로 다스리는 진료 분야입니다.
        </li>
        <li className={styles.listItem}>
          아이들의 몸은 작지만 빠르게 변하기 때문에, 부작용 없는 안전한 치료와
          체질에 맞춘 관리가 중요합니다.
        </li>
        <li className={styles.listItem}>
          한방소아과는 침, 한약, 뜸, 부항 등을 통해
          <span className={`${utilStyles.mainColor} ${utilStyles.bold}`}>
            아이의 자연치유력과 성장 능력을 키워주는 치료에 집중
          </span>
          합니다.
        </li>
      </ul>
    </section>
  );
});
