import styles from '@/pages/review/review-page.module.css';
import reviewImg from '@/pages/review/review-img.png';

const departmentMap = {
  internal: '한방내과',
  orthopedic: '한방정형외과',
  gynecology: '한방부인과',
  pediatrics: '한방소아과',
  bariatric: '비만체형클리닉',
};

export const ReviewList = ({ sortedData, onReviewClick }) => {
  return (
    <section className={styles.mainContent} role="main">
      {sortedData.map((item) => (
        <article
          key={item.id}
          className={styles.contentBox}
          onClick={() => onReviewClick(item.id)}
          role="link"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter') onReviewClick(item.id);
          }}
          style={{ cursor: 'pointer' }}
        >
          <img
            src={reviewImg || item.thumbnail}
            alt={`${item.title} 썸네일`}
            className={styles.thumbnail}
          />
          <div className={styles.textGroup}>
            <p className={styles.dept}>
              {departmentMap[item.departmentId] || '모두한의원'}
            </p>
            <h3 className={styles.title}>
              {item.title
                .replace(/[:,]/g, (match) => match + '\n')
                .split('\n')
                .map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
            </h3>
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
  );
};
