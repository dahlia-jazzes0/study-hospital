import { memo } from 'react';
import utilStyles from '../department-utils.module.css';
import styles from './department-orthopedic-insurance-section.module.css';

export const DepartmentOrthopedicInsuranceSection = memo(() => {
  return (
    <section className={styles.container}>
      <img
        className={styles.background}
        src="images/departments/orthopedic/car-accident-korean-insurance-guide.jpg"
        alt=""
        loading="lazy"
      />
      <div className={utilStyles.container}>
        <h3 className={styles.title}>
          <span className={utilStyles.mainColor}>자동차사고 한방치료</span>, 꼭
          알아야할 보험 안내!
        </h3>
        <p className={styles.description}>
          치료비 부담에 걱정하고 계신가요? 모두한의원과 함께 자동차사고 치료
          받으세요!
        </p>
        <ul className={styles.list}>
          {items.map((item) => (
            <ListItem
              key={item.no}
              no={item.no}
              title={item.title}
              items={item.items}
            />
          ))}
        </ul>
      </div>
    </section>
  );
});

const items = [
  {
    no: 1,
    title: '자동차보험으로 치료비 전액 지원',
    items: [
      '자동차보험(책임보험/자손/대인보험) 적용 시 환자 부담금 0원',
      '접수만 되면 침, 뜸, 한약, 약침, 추나 모두 전액 보험 처리 가능',
    ],
  },
  {
    no: 2,
    title: '한의원에서도 교통사고 진료가 가능',
    items: [
      '병원만 되는 게 아닙니다! 한의원도 자동차보험 지정의료기관',
      '진단서, 후유장해 진단, 소견서 작성도 가능',
    ],
  },
  {
    no: 3,
    title: '한약 치료도 보험 적용 가능',
    items: [
      '증상에 따라 한약도 보험 적용 가능 (처방 및 필요성 소견서 포함 시)',
      '근육이완, 염증 완화, 신경계 안정 등에 효과',
    ],
  },
].map((item) => ({
  ...item,
  items: item.items.map((content, index) => ({ id: index, content })),
}));

function ListItem({ no, title, items }) {
  return (
    <div className={styles.listItem}>
      <div>
        <div className={styles.listItemNo}>{no}</div>
      </div>
      <div>
        <h4 className={styles.listItemTitle}>{title}</h4>
        <ul>
          {items.map((item) => (
            <li key={item.id} className={styles.listSubItem}>
              {item.content}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
