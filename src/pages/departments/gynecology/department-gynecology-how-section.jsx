import { memo } from 'react';
import { DepartmentCaseCardGrid } from '../_ui/department-case-card';
import utilStyles from '../department-utils.module.css';
import styles from './department-gynecology-how-section.module.css';

export const DepartmentGynecologyHowSection = memo(() => {
  return (
    <section className={styles.container}>
      <div className={utilStyles.container}>
        <h3 className={styles.title}>
          <span className={styles.titleHighlight}>모두한의원</span>의
          한방부인과는
        </h3>
        <DepartmentCaseCardGrid items={items} />
      </div>
    </section>
  );
});

const items = [
  {
    id: 1,
    thumbnail: 'images/departments/gynecology/chief-doctor-personal-care.jpg',
    title: '여성전문 한의사가 직접 진료',
    description: '여성 질환에 특화된 진료 경험으로 섬세하고 정확한 치료 제공',
  },
  {
    id: 2,
    thumbnail:
      'images/departments/gynecology/pharmacopuncture-women-therapy.jpg',
    title: '비약물·비호르몬 치료 중심',
    description: '침·뜸·한약 위주의 자연치료로 부작용 걱정 없이 체질 개선',
  },
  {
    id: 3,
    thumbnail:
      'images/departments/gynecology/infertility-postnatal-clinic-korean.jpg',
    title: '난임·산후조리 특화 클리닉 운영',
    description: '임신 전후 단계별 맞춤 한방 관리로 건강한 출산과 회복 지원',
  },
  {
    id: 4,
    thumbnail:
      'images/departments/gynecology/holistic-care-emotional-therapy.jpg',
    title: '심리정서까지 아우르는 전인 치료',
    description: '신체 증상과 함께 감정의 균형까지 고려한 통합 진료',
  },
  {
    id: 5,
    thumbnail: 'images/departments/gynecology/women-lifecycle-korean-care.jpg',
    title: '여성 생애 주기별 맞춤 진료',
    description:
      '사춘기부터 폐경 이후까지 각 단계에 필요한 맞춤 한방 솔루션 제공',
  },
  {
    id: 6,
    thumbnail:
      'images/departments/gynecology/natural-diet-lifestyle-guidance.jpg',
    title: '자연주의 식이·생활습관 코칭 병행',
    description: '체질 개선을 위한 식이요법과 생활습관 지도까지 통합 관리',
  },
];
