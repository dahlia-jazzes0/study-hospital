import React, { useState, useEffect } from 'react';
import { fetchReviewsFromApi } from '@/pages/review/review-api';
import styles from '@/pages/review/review-page.module.css';
import { ReviewList } from '@/pages/review/review-list';
import { Pagination } from '@/pages/review/review-pagination';
import { CategoryFilter } from '@/pages/review/review-filter';
import { ReviewSearch } from '@/pages/review/review-search';

export const ReviewPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [reviews, setReviews] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const totalPages = Math.ceil(totalCount);
  console.log('totalPages:', totalPages);
  const [searchKeyword, setSearchKeyword] = useState('');

  // const [selectedDept, setSelectedDept] = useState('');

  const fetchDataWithFilters = async () => {
    try {
      const result = await fetchReviewsFromApi({
        page: currentPage,
        search: searchKeyword,
      });
      setReviews(result.articles);
      setTotalCount(result.total);
    } catch (e) {
      console.error('API 호출 실패:', e);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchDataWithFilters();
  };

  useEffect(() => {
    fetchDataWithFilters();
  }, [currentPage, searchKeyword]);
  // , searchKeyword, selectedDept

  return (
    <>
      <section
        className={styles.bannerSection}
        aria-label="메인 배너"
      ></section>

      <main className={styles.container}>
        <article>
          <header className={styles.pageHeader}>
            <h2 className={styles.pageTitle}>치료후기</h2>

            <nav className={styles.categoryTags} aria-label="카테고리">
              <CategoryFilter onChange={setReviews} />
            </nav>
          </header>

          <section className={styles.searchInfo} aria-label="검색">
            <div className={styles.info}>
              <span className={styles.totalCount}>Total: {totalCount}</span>
            </div>
            <ReviewSearch
              value={searchKeyword}
              onChange={setSearchKeyword}
              onSubmit={handleSearchSubmit}
            />
          </section>

          <section className={styles.contentArea}>
            <ReviewList sortedData={reviews} />
          </section>

          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(totalCount)}
            onPageChange={setCurrentPage}
          />
        </article>
      </main>
    </>
  );
};
