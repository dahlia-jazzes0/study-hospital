import reviewImg from '@/pages/review/review-img.png';
import styles from '@/pages/review/review-page.module.css';
import { Link } from 'react-router';

const departmentMap = {
  internal: '한방내과',
  orthopedic: '한방정형외과',
  gynecology: '한방부인과',
  pediatrics: '한방소아과',
  bariatric: '비만체형클리닉',
};

export const ReviewList = ({ sortedData }) => {
  return (
    <section className={styles.mainContent} role="main">
      {sortedData.map((item) => (
        <Link key={item.id} to={`/reviews/${item.id}`}>
          <article className={styles.contentBox} style={{ cursor: 'pointer' }}>
            <img
              src={reviewImg || item.thumbnail}
              alt={`${item.title} 썸네일`}
              className={styles.thumbnail}
            />
            <div className={styles.textGroup}>
              <p className={styles.dept}>
                {departmentMap[item.departmentId] || '모두한의원'}
              </p>
              <h3 className={styles.title}>{item.title}</h3>
            </div>
          </article>
        </Link>
      ))}
    </section>
  );
};
