import { fetchReviewsFromApi } from '@/pages/review/review-api';
import { CategoryFilter } from '@/pages/review/review-filter';
import { ReviewList } from '@/pages/review/review-list';
import styles from '@/pages/review/review-page.module.css';
import { Pagination } from '@/pages/review/review-pagination';
import { ReviewSearch } from '@/pages/review/review-search';
import { useEffect, useState } from 'react';

export const ReviewPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [result, setResult] = useState(null);
  const reviews = result?.articles ?? [];
  const totalCount = result?.total ?? 0;
  const totalPages = result?.totalPages ?? 0;
  const [selectedCategory, setSelectedCategory] = useState('');
  console.log('totalPages:', totalPages);
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const result = await fetchReviewsFromApi({
          page: currentPage,
          search: searchKeyword,
          department: selectedCategory,
        });
        setResult(result);
      } catch (e) {
        console.error('API 호출 실패:', e);
      }
    })();
  }, [currentPage, searchKeyword, selectedCategory]);

  return (
    <main className={styles.container}>
      <article>
        <header className={styles.pageHeader}>
          <h2 className={styles.pageTitle}>치료후기</h2>

          <nav className={styles.categoryTags} aria-label="카테고리">
            <CategoryFilter
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </nav>
        </header>

        <section className={styles.searchInfo} aria-label="검색">
          <div className={styles.info}>
            <span className={styles.totalCount}>Total: {totalCount}</span>
          </div>
          <ReviewSearch value={searchKeyword} onChange={setSearchKeyword} />
        </section>

        <section className={styles.contentArea}>
          <ReviewList sortedData={reviews} />
        </section>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </article>
    </main>
  );
};
