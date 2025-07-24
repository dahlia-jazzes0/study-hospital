import styles from '@/pages/review/review-page.module.css';

export const ReviewSearch = ({ value, onChange }) => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const keyword = formData.get('keyword');
      onChange(keyword);
    }}
  >
    <input
      type="search"
      name="keyword"
      className={styles.searchInput}
      placeholder="검색어 입력"
      defaultValue={value}
    />
    <button type="submit" className={styles.searchButton}>
      검색
    </button>
  </form>
);
