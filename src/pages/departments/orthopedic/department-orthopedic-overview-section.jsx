import { memo } from 'react';
import utilStyles from '../department-utils.module.css';
import styles from './department-orthopedic-overview-section.module.css';

export const DepartmentOrthopedicOverviewSection = memo(() => {
  return (
    <section className={styles.container}>
      <img
        className={styles.background}
        src="images/departments/orthopedic/korean-orthopedic-treatment-room.jpg"
        alt=""
      />
      <div className={utilStyles.container}>
        <h3 className={styles.title}>
          모두한의원{' '}
          <span className={utilStyles.subColor}>한방정형 통증 치료</span>
        </h3>
        <p className={styles.description}>
          통증을 방치하면 질병이 되며, 외상으로인한 손상은 사고 직후 적극적인
          치료가 가장 효과적입니다!
        </p>
        <div className={styles.cards}>
          <CardView
            thumbnail="images/departments/orthopedic/precision-diagnosis-custom-korean-treatment.jpg"
            title="정밀 진단 기반의 맞춤 한방치료"
            description="정밀한 진단으로 개인 체질과 증상에 맞는
침, 약침, 추나 등 통합 치료를 제공합니다"
          />
          <CardView
            thumbnail="images/departments/orthopedic/pain-specialist-focused-therapy.jpg"
            title="통증 전문 한의사의 1:1 집중 진료"
            description="풍부한 임상 경험을 지닌 통증 전문 한의사가
통증의 원인을 근본부터 개선하는 데 집중합니다"
          />
          <CardView
            thumbnail="images/departments/orthopedic/non-invasive-natural-healing.jpg"
            title="시술 없는 자연치유 중심 치료"
            description="수술이나 과도한 시술 없이 신체의 균형을 바로잡아 
통증을 완화하고 회복을 빠르게 도와드립니다"
          />
        </div>
      </div>
    </section>
  );
});

function CardView({ thumbnail, title, description }) {
  return (
    <article className={styles.card}>
      <img
        className={styles.cardThumbnail}
        src={thumbnail}
        alt=""
        loading="lazy"
      />
      <h4 className={styles.cardTitle}>{title}</h4>
      <p className={styles.cardDescription}>{description}</p>
    </article>
  );
}
