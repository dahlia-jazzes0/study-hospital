import { useEffect, useState, useCallback } from 'react';
import styles from '@/pages/review/review-page.module.css';
import { fetchReviewsFromApi } from '@/pages/review/review-api';

const categoryMap = {
  전체보기: '',
  한방내과: 'internal',
  한방정형외과: 'orthopedic',
  한방부인과: 'gynecology',
  한방소아과: 'pediatrics',
  비만체형클리닉: 'bariatric',
};

export function CategoryFilter({ onChange }) {
  const [selectedCategory, setSelectedCategory] = useState('전체보기');

  const handleCategoryClick = useCallback(
    async (name) => {
      setSelectedCategory(name);
      const data = await fetchReviewsFromApi({ department: categoryMap[name] });
      onChange(data.articles);
    },
    [onChange]
  );

  useEffect(() => {
    handleCategoryClick('전체보기');
  }, [handleCategoryClick]);

  return (
    <nav aria-label="카테고리">
      <ul className={styles.categoryList}>
        {Object.keys(categoryMap).map((name) => (
          <li key={name}>
            <button
              onClick={() => handleCategoryClick(name)}
              className={`${styles.tag} ${
                selectedCategory === name ? styles.active : styles.inactive
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
