import React, { useState, useEffect } from 'react';
import styles from '@/pages/review/review-page.module.css';
import { ReviewList } from '@/pages/review/review-list';
import { Pagination } from '@/pages/review/review-pagination';
import { CategoryFilter } from '@/pages/review/review-filter';
import { fetchReviewsFromApi } from '@/pages/review/review-api';

export const ReviewPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [reviews, setReviews] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const totalPages = Math.ceil(totalCount);
  console.log('totalPages:', totalPages);

  // const [searchKeyword, setSearchKeyword] = useState('');
  // const [selectedDept, setSelectedDept] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchReviewsFromApi({
          page: currentPage,
          // search: searchKeyword,
          // department: selectedDept,
        });

        setReviews(result.articles);
        setTotalCount(result.total);
      } catch (e) {
        console.error('API 호출 실패:', e);
      }
    };

    fetchData();
  }, [currentPage]);

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

          {/* Search Section */}
          <section className={styles.searchInfo} aria-label="검색">
            <div className={styles.info}>
              <span className={styles.totalCount}>Total: {totalCount}</span>
              <span className={styles.searchScope}></span>
            </div>
            <form className={styles.searchInputGroup}>
              <input
                type="search"
                className={styles.searchInput}
                placeholder="검색어 입력"
                aria-label="검색어 입력"
              />
              <button type="submit" className={styles.searchButton}>
                검색
              </button>
            </form>
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
