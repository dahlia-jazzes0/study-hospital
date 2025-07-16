import { useNavigate } from 'react-router';
import { reviewData } from '@/pages/review/review-data';
import styles from '@/pages/review/review-page.module.css';

export const ReviewList = ({ currentPage, itemsPerPage }) => {
  const navigate = useNavigate();

  // 최신순 정렬
  const sortedData = reviewData.slice().reverse();

  // 현재 페이지에 보여줄 데이터 슬라이싱
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirst, indexOfLast);

  return (
    <>
      <section className={styles.mainContent} role="main">
        {currentItems.map((item) => (
          <article
            key={item.id}
            className={styles.contentBox}
            onClick={() => navigate(`/review-page/${item.id}`)}
            role="link"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') navigate(`/review-page/${item.id}`);
            }}
            style={{ cursor: 'pointer' }}
          >
            <img
              src={item.image}
              alt={`${item.title} 썸네일`}
              className={styles.thumbnail}
            />
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.dept}>{item.dept}</p>
          </article>
        ))}
      </section>
    </>
  );
};
