import { memo, useRef } from 'react';
import { useIncreasingAnimation } from '../_hooks/use-increasing-animation';
import { useIntersectionObserver } from '../_hooks/use-intersection-observer';
import { DepartmentCircularProgressBar } from '../_ui/department-circular-progress-bar';
import utilStyles from '../department-utils.module.css';
import styles from './department-orthopedic-stats-section.module.css';

export const DepartmentOrthopedicStatsSection = memo(() => {
  const stats = [
    { to: 49, label: '근골격계 질환 경험률' },
    { to: 43, label: '목·어깨 통증 근골격계 질환 경험자' },
    { to: 28, label: '급성 → 만성 전환율' },
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
        src="images/departments/orthopedic/spine-pain-xray-illustration.jpg"
        alt=""
        loading="lazy"
      />
      <div className={utilStyles.container}>
        <h3 className={styles.title}>
          근골격계 질환, 더 이상 방치하지 마세요!
        </h3>
        <p className={styles.description}>
          스마트폰 시대, 근골격계 질환이 크게 증가하고 이를 방치하여 만성적
          질환으로 쉽게 이어지고 있습니다.
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
          * 남성 40.4%, 여성49.4%가 동일 기간 근골격계 질환 자각 / *스마트폰
          사용으로 인한 근골격계 질환 증가율 43% / *급성 → 만성 전환율 급성 86%
          → 만성 24%, 전환율 약 28%
        </p>
      </div>
    </section>
  );
});
