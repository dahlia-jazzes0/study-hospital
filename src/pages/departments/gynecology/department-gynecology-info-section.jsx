import { memo } from 'react';
import utilStyles from '../department-utils.module.css';
import styles from './department-gynecology-info-section.module.css';

export const DepartmentGynecologyInfoSection = memo(() => {
  return (
    <section className={styles.container}>
      <img
        className={styles.background}
        src="images/departments/gynecology/herbal-medicine-background.jpg"
        alt=""
      />
      <div className={utilStyles.container}>
        <h3 className={styles.title}>
          난임, 산모의 건강한 신체가 가장 우선입니다
        </h3>
        <p className={styles.description}>
          임신은 단순히 결과만을 목표로 하는 것이 아니라, 그 과정을 준비하는
          몸과 마음이 먼저 건강해야 시작됩니다.
          <br />
          한방에서는 난임의 원인을 단지 자궁의 문제로 보지 않고, 기혈의 순환,
          체질의 불균형, 스트레스, 생활습관 등 전신의 조화를 중시합니다.
          <br />
          우리 몸의 자연치유력을 높이고, 자궁과 내분비계의 기능을 회복시켜
          임신이 가능한 건강한 신체 조건을 만들어가는 것이 치료의 핵심입니다.
          <br />
          또한 임신 이후에는 산모의 체력 유지와 정서적 안정을 도와 건강한 출산과
          회복까지 이어질 수 있도록 함께합니다.
        </p>
        <div className={styles.cards}>
          <CardView
            thumbnail="images/departments/gynecology/danggui-angelica-root-korean.jpg"
            title={
              <>
                당귀 <span className={styles.cardTitleHanja}>(當歸)</span>
              </>
            }
            description="혈을 보하고 순환을 도와 자궁 내막을 건강하게 유지"
          />
          <CardView
            thumbnail="images/departments/gynecology/shudihuang-rehmannia-root.jpg"
            title={
              <>
                숙지황 <span className={styles.cardTitleHanja}>(熟地黃)</span>
              </>
            }
            description="신장(腎)을 보하고 혈을 보강하여 생식 기능을 강화"
          />
          <CardView
            thumbnail="images/departments/gynecology/sansha-crataegus-fruit-medicine.jpg"
            title={
              <>
                산사 <span className={styles.cardTitleHanja}>(山楂)</span>
              </>
            }
            description="비위(脾胃)를 도와 다른 보약의 흡수를 돕고 자궁 혈류를 원활하게 함"
          />
        </div>
      </div>
    </section>
  );
});

function CardView({ thumbnail, title, description }) {
  return (
    <article className={styles.card}>
      <h4 className={styles.cardTitle}>{title}</h4>
      <img
        className={styles.cardThumbnail}
        src={thumbnail}
        alt=""
        loading="lazy"
      />
      <p className={styles.cardDescription}>{description}</p>
    </article>
  );
}
