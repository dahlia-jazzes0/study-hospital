import React, { useState } from 'react';
import styles from '@/pages/review/review-page.module.css';
import { ReviewList } from '@/pages/review/review-list';
import { reviewData } from '@/pages/review/review-data';
import { Pagination } from '@/pages/review/review-pagination';

export const ReviewPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(reviewData.length / itemsPerPage);

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

            {/* Category Tags */}
            <nav className={styles.categoryTags} aria-label="카테고리">
              <ul className={styles.categoryList}>
                <li>
                  <button className={`${styles.tag} ${styles.active}`}>
                    전체보기
                  </button>
                </li>
                <li>
                  <button className={`${styles.tag} ${styles.inactive}`}>
                    한방내과
                  </button>
                </li>
                <li>
                  <button className={`${styles.tag} ${styles.inactive}`}>
                    한방정형외과
                  </button>
                </li>
                <li>
                  <button className={`${styles.tag} ${styles.inactive}`}>
                    한방부인과
                  </button>
                </li>
                <li>
                  <button className={`${styles.tag} ${styles.inactive}`}>
                    한방소아과
                  </button>
                </li>
                <li>
                  <button className={`${styles.tag} ${styles.inactive}`}>
                    다이어트클리닉
                  </button>
                </li>
              </ul>
            </nav>
          </header>

          {/* Search Section */}
          <section className={styles.searchInfo} aria-label="검색">
            <div className={styles.info}>
              <span className={styles.totalCount}>
                Total: {reviewData.length}
              </span>
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
            {/* 페이지 정보 전달 */}
            <ReviewList currentPage={currentPage} itemsPerPage={itemsPerPage} />
          </section>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </article>
      </main>
    </>
  );
};
