import { memo } from 'react';
import utilStyles from '../department-utils.module.css';
import styles from './department-internal-where-section.module.css';

export const DepartmentInternalWhereSection = memo(() => {
  return (
    <section className={`${utilStyles.container} ${styles.container}`}>
      <h3 className={styles.title}>
        <span className={utilStyles.mainColor}>한방내과</span>는 어떤 곳인가요?
      </h3>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <span className={utilStyles.bold}>한방내과</span>는 한의학의 원리를
          바탕으로 내과적 질환을 진단하고 치료합니다.
        </li>
        <li className={styles.listItem}>
          <span className={utilStyles.mainColor}>
            몸 전체의 균형과 기혈의 흐름을 중요하게 여기며, 질환의 근본 원인을
            찾아 자연 치유력을 회복
          </span>
          하는 데 초점을 둡니다.
        </li>
        <li className={styles.listItem}>
          약물 치료보다는 침, 뜸, 한약 등 비침습적 방법을 활용하여 부작용을
          줄이고 회복력을 높입니다.
        </li>
      </ul>
    </section>
  );
});
