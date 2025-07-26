import { memo, useEffect, useState } from 'react';
import { DepartmentCrossfadeImage } from '../_ui/department-crossfade-image';
import utilStyles from '../department-utils.module.css';
import styles from './department-orthopedic-what-section.module.css';

export const DepartmentOrthopedicWhatSection = memo(() => {
  const currentImage = useRotate(data);

  return (
    <section className={`${utilStyles.container} ${styles.container}`}>
      <h3 className={styles.title}>
        <span className={utilStyles.mainColor}>한방정형외과</span> 치료과목
      </h3>
      <div className={styles.content}>
        <DepartmentCrossfadeImage
          className={styles.image}
          src={currentImage.thumbnail}
          alt=""
        />
        <ul className={styles.list}>
          {items.map((item) => (
            <ListItem key={item.no} no={item.no} content={item.content} />
          ))}
        </ul>
      </div>
    </section>
  );
});

const items = [
  { no: 1, content: '목·어깨 통증, 거북목, 일자목' },
  { no: 2, content: '허리디스크, 요통, 좌골신경통' },
  { no: 3, content: '무릎통증, 관절염, 퇴행성 질환' },
  { no: 4, content: '교통사고 후유증, 외상 후 통증' },
  { no: 5, content: '손목, 발목, 테니스엘보 등 반복성 사용 질환' },
];

const ListItem = memo(({ no, content }) => {
  return (
    <li className={styles.listItem}>
      <div className={styles.listItemNo}>{no}</div>
      {content}
    </li>
  );
});

function useRotate(items, delay = 2000) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setIndex((index) => (index + 1) % items.length);
    }, delay);
    return () => {
      clearInterval(timerId);
    };
  }, [delay, items.length]);

  return items[index];
}

const data = [
  {
    id: 1,
    thumbnail: 'images/departments/orthopedic/spine-pain-anatomy-visual.jpg',
  },
  {
    id: 2,
    thumbnail: 'images/departments/orthopedic/shoulder-pain-anatomy-visual.jpg',
  },
  {
    id: 3,
    thumbnail: 'images/departments/orthopedic/elbow-pain-anatomy-visual.jpg',
  },
  {
    id: 4,
    thumbnail:
      'images/departments/orthopedic/hip-joint-pain-anatomy-visual.jpg',
  },
  {
    id: 5,
    thumbnail: 'images/departments/orthopedic/knee-pain-anatomy-visual.jpg',
  },
  {
    id: 6,
    thumbnail: 'images/departments/orthopedic/ankle-pain-anatomy-visual.jpg',
  },
];
