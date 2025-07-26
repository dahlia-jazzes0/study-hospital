import { memo } from 'react';
import utilStyles from '../department-utils.module.css';
import styles from './department-pediatrics-qna-section.module.css';

export const DepartmentPediatricsQnaSection = memo(() => {
  return (
    <section className={`${utilStyles.container} ${styles.container}`}>
      <h3 className={styles.title}>
        의사 선생님 <span className={utilStyles.mainColor}>질문</span>있어요!
      </h3>
      <p className={styles.description}>
        우리아이 건강한 성장을 위한 보호자 단골 질문
      </p>
      <div className={styles.content}>
        <QnaView
          question="한방소아과에서는 어떤 질환까지 진료가 가능한가요?"
          answer={
            <>
              <span className={utilStyles.mainColor}>
                감기, 비염, 소화기 질환은 물론 아토피, 성장 문제, 수면장애,
                야제증, 면역력 저하
              </span>
              까지 폭넓게 진료합니다. 단순 치료뿐 아니라{' '}
              <span className={utilStyles.mainColor}>
                예방과 체질 개선 중심의 통합 관리
              </span>
              가 가능합니다.
            </>
          }
        />
        <QnaView
          question="아이 키가 또래보다 작아요. 한방으로 도움을 받을 수 있나요?"
          answer={
            <>
              <span className={utilStyles.mainColor}></span>
              한방에서는{' '}
              <span className={utilStyles.mainColor}>
                단순한 키 수치뿐 아니라 기혈, 소화력, 수면, 체질 등 성장에
                영향을 주는 여러 요소를 함께 봅니다
              </span>
              . 체질에 맞는 한약, 성장추나, 운동·식이 지도 등을 통해{' '}
              <span className={utilStyles.mainColor}>균형 잡힌 성장</span>을
              도울 수 있습니다.
            </>
          }
        />
        <QnaView
          question="아이가 산만하고 감정 기복이 심한데, 한방치료로 조절이 되나요?"
          answer={
            <>
              ADHD, 정서불안, 분노조절 문제 등은{' '}
              <span className={utilStyles.mainColor}>
                한의학적으로 간기울결, 심열과 같은 불균형에서 원인
              </span>
              을 찾습니다.{' '}
              <span className={utilStyles.mainColor}>
                아이의 체질과 상태에 맞춘 안정 한약, 약침, 감정 조절 치료를 통해
                충분히 개선
              </span>
              될 수 있습니다.
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
        src="images/departments/pediatrics/chief-doctor-portrait.jpg"
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
