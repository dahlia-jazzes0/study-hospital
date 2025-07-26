import { memo } from 'react';
import { DepartmentCaseCardGrid } from '../_ui/department-case-card';
import utilStyles from '../department-utils.module.css';
import styles from './department-internal-how-section.module.css';

export const DepartmentInternalHowSection = memo(() => {
  return (
    <section className={`${utilStyles.container} ${styles.container}`}>
      <h3 className={styles.title}>
        <span className={utilStyles.mainColor}>한방내과</span>에서는 어떤 치료를
        하나요?
      </h3>
      <p className={styles.description}>
        모두한의원은 환자의 체질과 종합적 건강 상태를 고려한 인체 친화적 치유를
        통해 자연적인 회복을 돕습니다
      </p>
      <DepartmentCaseCardGrid items={items} />
    </section>
  );
});

const items = [
  {
    id: 1,
    thumbnail: 'images/departments/internal/acupuncture-back-pain-relief.jpg',
    title: '침 치료',
    description: '경혈을 자극해 기혈 순환을 도와 통증 완화 및 기능 회복',
  },
  {
    id: 2,
    thumbnail: 'images/departments/internal/moxibustion-herbal-injection.jpg',
    title: '뜸 치료 / 약침요법',
    description: '온열 및 약물 자극을 통해 면역력 강화',
  },
  {
    id: 3,
    thumbnail: 'images/departments/internal/chuna-manual-therapy-korean.jpg',
    title: '추나요법',
    description:
      '틀어진 척추나 관절을 교정하여 내장 기능 개선과 통증 완화에 도움',
  },
  {
    id: 4,
    thumbnail: 'images/departments/internal/herbal-tea-respiratory-support.jpg',
    title: '호흡기 약선요법',
    description:
      '폐기능 강화에 좋은 한약 · 식이요법으로 만성 기침이나 기관지 질환 보조 치료',
  },
  {
    id: 5,
    thumbnail: 'images/departments/internal/body-type-diagnosis-korean.jpg',
    title: '체질 진단 및 식이 지도',
    description: '생활습관 개선을 통한 전인적 치료',
  },
  {
    id: 6,
    thumbnail:
      'images/departments/internal/oriental-herbal-medicine-treatment.jpg',
    title: '한약치료',
    description:
      '개인 체질과 증상에 맞춘 맞춤 한약으로 기력 회복과 내장 기능 강화',
  },
];
