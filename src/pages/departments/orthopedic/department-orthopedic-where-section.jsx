import { memo } from 'react';
import utilStyles from '../department-utils.module.css';
import styles from './department-orthopedic-where-section.module.css';

export const DepartmentOrthopedicWhereSection = memo(() => {
  return (
    <section className={`${utilStyles.container} ${styles.container}`}>
      <h3 className={styles.title}>
        <span className={utilStyles.mainColor}>한방정형외과</span>는 어떤
        곳인가요?
      </h3>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <span className={utilStyles.bold}>한방정형외과</span>근골격계
          질환(근육·관절·신경계의 통증과 기능장애)을 한방적으로 진단하고
          치료합니다.
        </li>
        <li className={styles.listItem}>
          외상이나 반복된 사용, 잘못된 자세로 인한 근육·관절 통증을 침, 뜸,
          추나, 약침 등으로 근본부터 다스립니다.
        </li>
        <li className={styles.listItem}>
          통증만 줄이는 것이 아니라 몸의 정렬과 기혈순환을 함께 바로잡는 치료가
          핵심입니다.
        </li>
      </ul>
    </section>
  );
});
