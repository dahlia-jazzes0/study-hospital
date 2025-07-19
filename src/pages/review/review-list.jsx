import { useNavigate } from 'react-router';
import styles from '@/pages/review/review-page.module.css';
import reviewImg from '@/pages/review/review-img.png';

export const ReviewList = ({ sortedData }) => {
  const navigate = useNavigate();

  return (
    <>
      <section className={styles.mainContent} role="main">
        {sortedData.map((item) => (
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
              src={reviewImg || item.thumbnail}
              alt={`${item.title} 썸네일`}
              className={styles.thumbnail}
            />
            <div className={styles.textGroup}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.dept}>{item.dept}</p>
              <p className={styles.date}>
                {new Date(item.createdAt)
                  .toISOString()
                  .slice(0, 10)
                  .replace(/-/g, '.')}
              </p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
};
