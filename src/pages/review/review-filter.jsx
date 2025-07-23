import styles from '@/pages/review/review-page.module.css';

const categoryMap = {
  전체보기: '',
  한방내과: 'internal',
  한방정형외과: 'orthopedic',
  한방부인과: 'gynecology',
  한방소아과: 'pediatrics',
  비만체형클리닉: 'bariatric',
};

export function CategoryFilter({ selectedCategory, setSelectedCategory }) {
  return (
    <nav aria-label="카테고리">
      <ul className={styles.categoryList}>
        {Object.entries(categoryMap).map(([name, value]) => (
          <li key={name}>
            <button
              onClick={() => setSelectedCategory(value)}
              className={`${styles.tag} ${
                selectedCategory === value ? styles.active : styles.inactive
              }`}
            >
              {name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
