import { memo, useRef } from 'react';
import { useIncreasingAnimation } from '../_hooks/use-increasing-animation';
import { useIntersectionObserver } from '../_hooks/use-intersection-observer';
import { DepartmentCircularProgressBar } from '../_ui/department-circular-progress-bar';
import utilStyles from '../department-utils.module.css';
import styles from './department-internal-stats-section.module.css';

export const DepartmentInternalStatsSection = memo(() => {
  const stats = [
    { to: 79.8, label: '이상지질혈증 고콜레스테롤혈증' },
    { to: 39, label: '고혈압 · 당뇨 등 만성 질환 2개 이상 보유' },
    { to: 17.1, label: '지방간 비알콜성 지방간 질환' },
  ].map(({ to, label }, index) => {
    const id = index;
    // 항상 동일한 갯수가 동일한 순서로 호출되기 때문에 훅 규칙을 위배하지 않음
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const animation = useIncreasingAnimation(() => ({
      to,
      ease: (t) => (t < 0.5 ? 4 * t ** 3 : 1 - 0.5 * (-2 * t + 2) ** 3),
    }));
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ref = useRef();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const observer = useIntersectionObserver(() => ({
      ref,
      options: {
        threshold: [0, 0.5],
      },
      onIntersect(entry) {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          animation.start();
        }
        if (!entry.isIntersecting && entry.intersectionRatio <= 0) {
          animation.reset();
        }
      },
    }));
    return { id, animation, ref, observer, label };
  });
  return (
    <section className={styles.container}>
      <img
        className={styles.background}
        src="images/departments/internal/korean-internal-medicine-stats-bg.jpg"
        alt=""
        loading="lazy"
      />
      <div className={utilStyles.container}>
        <h3 className={styles.title}>
          얼마나 많은 사람들이 내과적 질환을 경험하고 있을까요?
        </h3>
        <p className={styles.description}>
          한국인 기준, 만성 내과적 질환을 보유한 인구가 급증하고 있습니다.
          이러한 질환은 예방하여 큰 질병으로 이어지는 것을 막을 수 있습니다.
        </p>
        <div className={styles.content}>
          {stats.map((stat) => (
            <DepartmentCircularProgressBar
              key={stat.id}
              ref={stat.ref}
              color="var(---main-color)"
              value={stat.animation.value}
              label={stat.label}
              size="var(---circular-size)"
            />
          ))}
        </div>
        <p className={styles.caption}>
          *이상지질혈증, 고콜레스테롤혈증 20대-30대 젊은층 기준 / *50세 이상
          성인 중 약 39% 2개 이상의 만성질환을 보유 / *지방간(비알코올성 지방간
          질환, NAFLD) 2022년 기준 17.1%, 2012년 10.5%에서 크게 증가
        </p>
      </div>
    </section>
  );
});
