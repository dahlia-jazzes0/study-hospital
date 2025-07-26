import { memo } from 'react';
import { DepartmentCaseCardGrid } from '../_ui/department-case-card';
import utilStyles from '../department-utils.module.css';
import styles from './department-pediatrics-how-section.module.css';

export const DepartmentPediatricsHowSection = memo(() => {
  return (
    <section className={styles.container}>
      <div className={utilStyles.container}>
        <h3 className={styles.title}>
          <span className={styles.titleHighlight}>모두한의원</span>의
          한방소아과는
        </h3>
        <DepartmentCaseCardGrid items={items} />
      </div>
    </section>
  );
});

const items = [
  {
    id: 1,
    thumbnail: 'images/departments/pediatrics/chief-doctor-personal-care.jpg',
    title: '소아진료 경험이 풍부한 한의사 진료',
    description:
      '소아진료 전담 치료전문인력\n아이의 발달 특성에 맞춘 세심한 치료',
  },
  {
    id: 2,
    thumbnail:
      'images/departments/pediatrics/mild-herbal-medicine-for-kids.jpg',
    title: '쓴맛 적은 순한 한약 처방',
    description: '전문한약사의 노하우\n아이들이 잘 먹을 수 있도록 맞춤 조제',
  },
  {
    id: 3,
    thumbnail:
      'images/departments/pediatrics/preventive-constitution-strengthening.jpg',
    title: '예방 중심의 체질 강화 프로그램 운영',
    description:
      '성장과 면역에 중점을 둔 치료\n면역을 길러 큰 질병으로 이어지지 않도록 예방',
  },
  {
    id: 4,
    thumbnail:
      'images/departments/pediatrics/mother-baby-immune-growth-care.jpg',
    title: '면역·성장·정서까지 통합 관리',
    description:
      '몸뿐 아니라 마음까지 함께 보살피는 진료\n아이의 건강한 신체 성장을 고려한 맞춤 치료',
  },
  {
    id: 5,
    thumbnail:
      'images/departments/pediatrics/noninvasive-treatment-pharmacopuncture.jpg',
    title: '침 대신 약침·뜸 등 비침습적 치료 가능',
    description: '통증에 민감한 우리 아이, 병원에 대한 부담 없는 순한 치료',
  },
  {
    id: 6,
    thumbnail:
      'images/departments/pediatrics/child-parent-korean-medicine-consulting.jpg',
    title: '아이와 부모가 함께하는 맞춤 상담 진행',
    description:
      '치료뿐 아니라 식습관, 수면, 생활환경까지 부모와 함께 꼼꼼하게 관리',
  },
];
