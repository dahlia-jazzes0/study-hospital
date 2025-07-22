import styles from './review-card.module.css';
import { Clock } from 'lucide-react';

export function ReviewCard({ title, date, onClick }) {
  return (
    <article className={styles.reviewCard} onClick={onClick}>
      <h2 className="sr-only">치료후기 목록</h2>

      <figure className={styles.cardImage} aria-hidden="true"></figure>

      <header className={styles.cardContent}>
        <h3>{title}</h3>
        <time dateTime={date} className={styles.dateTime}>
          <Clock size={14} className={styles.clockIcon} />
          {date}
        </time>
      </header>
    </article>
  );
}
