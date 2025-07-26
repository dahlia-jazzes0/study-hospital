import { memo } from 'react';
import utilStyles from '../department-utils.module.css';
import styles from './department-gynecology-where-section.module.css';

export const DepartmentGynecologyWhereSection = memo(() => {
  return (
    <section className={`${utilStyles.container} ${styles.container}`}>
      <h3 className={styles.title}>
        <span className={utilStyles.mainColor}>한방부인과</span>는 어떤
        곳인가요?
      </h3>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <span className={`${utilStyles.mainColor} ${utilStyles.bold}`}>
            한방부인과
          </span>
          는 여성의 생리주기, 임신, 출산, 갱년기 등 전 생애 주기에서 발생할 수
          있는 질환과 불균형을 치료합니다.
        </li>
        <li className={styles.listItem}>
          <span className={`${utilStyles.mainColor} ${utilStyles.bold}`}>
            기혈의 흐름과 오장육부의 조화를 중시하며, 몸 전체의 균형을 회복하여
            여성의 건강을 자연스럽게 돌려놓는 것을 목표
          </span>
          로 합니다.
        </li>
        <li className={styles.listItem}>
          화학적 호르몬 요법 없이도 부작용 없이 안정적인 회복을 도울 수 있는
          대안 치료로 주목받고 있습니다.
        </li>
      </ul>
    </section>
  );
});
