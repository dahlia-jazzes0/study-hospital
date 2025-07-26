import { memo } from 'react';
import utilStyles from '../department-utils.module.css';
import styles from './department-bariatric-solution-section.module.css';

export const DepartmentBariatricSolutionSection = memo(() => {
  return (
    <section className={`${utilStyles.container} ${styles.container}`}>
      <h3 className={styles.title}>
        모두한의원{' '}
        <span className={utilStyles.mainColor}>비만체형클리닉 솔루션</span>
      </h3>
      <div className={styles.steps}>
        {items.map((item) => (
          <Step key={item.no} {...item} />
        ))}
      </div>
    </section>
  );
});

const items = [
  {
    no: 1,
    title: '한방 · BMI 체질분석',
    description:
      '전통 한의학의 사상체질 이론과 현대의 체성분 분석(BMI, 체지방률 등)을 결합하여, 개인의 체질적 특성과 건강 상태를 과학적이고 입체적으로 진단하는 맞춤형 건강 평가입니다.',
    image: 'images/departments/bariatric/bmi-analysis-korean-pulse.jpg',
  },
  {
    no: 2,
    title: '전문 의료진 상담',
    description:
      '비만의 원인과 생활습관, 체질을 종합적으로 분석하여 한의사와의 1:1 맞춤 상담을 통해 안전하고 효과적인 다이어트 방향을 제시합니다.',
    image: 'images/departments/bariatric/obesity-clinic-doctor-consult.jpg',
  },
  {
    no: 3,
    title: '맞춤 치료 플랜',
    description:
      '비만은 단순한 미용 문제가 아닌 질병으로 인식하고, 개인의 체질·체형·건강상태에 맞춘 과학적이고 지속 가능한 치료 계획을 수립합니다.',
    image: 'images/departments/bariatric/custom-treatment-plan-oriental.jpg',
  },
  {
    no: 4,
    title: '집중관리 프로그램',
    description:
      '한방치료뿐 아니라 다이어트 전문 실장이 직접 식단 코칭과 운동 루틴을 체계적으로 관리하여, 목표 체중 감량과 건강한 생활습관 정착까지 함께합니다.',
    image: 'images/departments/bariatric/waist-measurement-diet-check.jpg',
  },
];

function Step({ no, title, description, image }) {
  return (
    <section>
      <h4 className={styles.stepTitle}>
        <span className={styles.stepBadge}>STEP{no}</span> {title}
      </h4>
      <p className={styles.stepDescription}>{description}</p>
      <img className={styles.stepImage} src={image} alt="" />
    </section>
  );
}
