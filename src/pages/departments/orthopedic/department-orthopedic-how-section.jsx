import { memo } from 'react';
import { DepartmentCaseCardGrid } from '../_ui/department-case-card';
import utilStyles from '../department-utils.module.css';
import styles from './department-orthopedic-how-section.module.css';

export const DepartmentOrthopedicHowSection = memo(() => {
  return (
    <section className={styles.container}>
      <div className={utilStyles.container}>
        <h3 className={styles.title}>
          <span className={utilStyles.subColor}>한방정형외과</span>에서는 어떤
          치료를 하나요?
        </h3>
        <DepartmentCaseCardGrid size="lg" items={items} />
      </div>
    </section>
  );
});
const items = [
  {
    id: 1,
    thumbnail: 'images/departments/internal/acupuncture-back-pain-relief.jpg',
    title: '침 치료',
    description:
      '근육의 긴장을 완화하고 통증 부위의 혈류를 개선하여 염증을 줄이고 회복을 촉진합니다.\n단순한 통증 완화가 아니라, 기혈의 흐름을 바로잡아 뿌리부터 치료하는 것이 특징입니다.',
  },
  {
    id: 2,
    thumbnail:
      'images/departments/orthopedic/herbal-injection-korean-medicine.jpg',
    title: '약침요법',
    description:
      '엄선된 한약 성분을 정제해 통증 부위에 직접 주입하는 방법으로, 침의 기전과 약물 효과를 동시에 얻을 수 있습니다.\n특히 염증 완화, 신경통 완화, 조직 재생 촉진에 효과적입니다.',
  },
  {
    id: 3,
    thumbnail:
      'images/departments/orthopedic/chuna-therapy-spinal-alignment.jpg',
    title: '추나요법 (척추·관절 교정치료)',
    description:
      '한의사가 직접 손으로 척추와 관절의 정렬을 교정하여 구조적 불균형을 개선하는 치료입니다.\n자세 불균형, 틀어진 골반, 일자목, 거북목 등의 근본적인 원인을 다스리는 데 매우 효과적입니다.',
  },
  {
    id: 4,
    thumbnail:
      'images/departments/orthopedic/exercise-posture-guidance-korean.jpg',
    title: '운동요법 및 자세 교육',
    description:
      '단순히 치료로 끝나는 것이 아니라, 재발 방지를 위해 생활습관을 개선하는 운동 지도와 자세 교정을 병행합니다.\n약화된 근육을 강화하고 불균형한 자세를 바로잡아 몸의 정렬을 회복하는 데 중점을 둡니다.',
  },
  {
    id: 5,
    thumbnail:
      'images/departments/orthopedic/manual-therapy-korean-orthopedics.jpg',
    title: '도수치료',
    description:
      '전문 도수치료사가 직접 손으로 근육과 관절을 풀어주는 수기요법으로, 깊은 근막층의 긴장을 완화합니다.\n기계나 약물에 의존하지 않고 인체에 가장 자연스러운 방식으로 회복을 유도합니다.',
  },
  {
    id: 6,
    thumbnail: 'images/departments/internal/herbal-tea-respiratory-support.jpg',
    title: '한약치료',
    description:
      '근육과 인대를 튼튼히 하고, 체내 염증 반응을 줄이며 회복력을 높이는 개인 맞춤형 한약을 처방합니다.\n만성 통증 환자나 교통사고 후유증 환자에게 특히 효과적입니다.',
  },
];
