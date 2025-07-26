import styles from './review-card.module.css';
import { Clock } from 'lucide-react';

export function ReviewCard({ title, date, thumbnail }) {
  return (
    <article className={styles.reviewCard}>
      <figure className={styles.cardImage} aria-hidden="true">
        <img src={thumbnail} alt={`${title} 썸네일`} />
      </figure>
      <div className={styles.cardContent}>
        <h2>{title}</h2>
        <time dateTime={date} className={styles.dateTime}>
          <Clock className={styles.clockIcon} />
          {date}
        </time>
      </div>
    </article>
  );
}
