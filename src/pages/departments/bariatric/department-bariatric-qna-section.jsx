import { memo } from 'react';
import utilStyles from '../department-utils.module.css';
import styles from './department-bariatric-qna-section.module.css';

export const DepartmentBariatricQnaSection = memo(() => {
  return (
    <section className={`${utilStyles.container} ${styles.container}`}>
      <h3 className={styles.title}>
        한방 다이어트, <span className={styles.titleHighlight}>궁금</span>해요!
      </h3>
      <p className={styles.description}>건강한 다이어트, 가능한건가요?</p>
      <div className={styles.content}>
        <QnaView
          question="한방 다이어트로 얼마나 감량할 수 있나요?"
          answer={
            <>
              감량 폭은 체질, 생활습관, 순응도에 따라 다르지만,{' '}
              <span className={utilStyles.mainColor}>
                1개월 기준 평균 3~5kg 내외의 감량
              </span>
              을 기대할 수 있습니다.{' '}
              <span className={utilStyles.mainColor}>
                무리한 감량보다 건강하게 빠지고 유지되는 감량을 목표
              </span>
              로 합니다.
            </>
          }
        />
        <QnaView
          question="굶지 않아도 된다고 하셨는데, 그래도 식단 조절은 꼭 해야 하나요?"
          answer={
            <>
              네, 굶지 않아도 되지만 체질과 감량 목표에 맞는 식단 조절은
              필요합니다.{' '}
              <span className={utilStyles.mainColor}>
                한방 다이어트는 무리한 절식이 아니라, 소화기 기능을 회복시키고
                대사를 촉진하는 방향으로 식단을 조정
              </span>
              합니다. 실천 가능한 범위 내에서 전문 관리자가 식사 방향을
              코칭해드리니 부담 없이 시작하실 수 있습니다.
            </>
          }
        />
        <QnaView
          question="한방 다이어트는 부작용이 없나요?"
          answer={
            <>
              <span className={utilStyles.mainColor}>
                한약과 치료는 모두 개인의 체질과 건강 상태를 고려해 맞춤
                처방되기 때문에 일반적으로 부작용은 거의 없습니다
              </span>
              . 오히려 체력 회복, 소화 개선 등 컨디션 향상을 경험하는 경우가
              많습니다.
            </>
          }
        />
      </div>
    </section>
  );
});

function QnaView({ question, answer }) {
  return (
    <article className={styles.card}>
      <img
        className={styles.cardProfileImage}
        src="images/departments/bariatric/chief-doctor-portrait.jpg"
        alt=""
      />
      <div className={styles.cardContent}>
        <div className={styles.cardLine}>
          <div className={styles.cardQ}>Q</div>
          <div>{question}</div>
        </div>
        <div className={styles.cardLine}>
          <div className={styles.cardA}>A</div>
          <div>{answer}</div>
        </div>
      </div>
    </article>
  );
}
