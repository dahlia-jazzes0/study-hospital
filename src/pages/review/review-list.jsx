// /pages/review/review-list.jsx
import { useNavigate } from 'react-router';
import { reviewData } from '@/pages/review/review-data';
import styles from '@/pages/review/review-page.module.css';

export const ReviewList = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.mainContent} role="main">
      {reviewData.map((item) => (
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
  );
};
