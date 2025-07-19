import styles from '@/pages/review/review-page.module.css';

export const ReviewSearch = ({ value, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input
      type="search"
      className={styles.searchInput}
      placeholder="검색어 입력"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
    <button type="submit" className={styles.searchButton}>
      검색
    </button>
  </form>
);
