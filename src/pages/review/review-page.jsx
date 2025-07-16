import React from 'react';
import styles from '@/pages/review/review-page.module.css';

export const ReviewPage = () => {
  return (
    <>
      {/* Banner Section - 전체 화면 너비 */}
      <section
        className={styles.bannerSection}
        aria-label="메인 배너"
      ></section>

      <main className={styles.container}>
        {/* Page Content */}
        <article>
          {/* Page Header */}
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
              <span className={styles.totalCount}>Total: 342</span>
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

          {/* Content Area */}
          <section className={styles.contentArea}>
            {/* Main Content */}
            <ReviewList />
          </section>

          {/* Pagination */}
          <nav className={styles.pagination} aria-label="페이지 네비게이션">
            <button className={`${styles.paginationItem} ${styles.disabled}`}>
              «
            </button>
            <button className={`${styles.paginationItem} ${styles.disabled}`}>
              ‹
            </button>
            <button className={`${styles.paginationItem} ${styles.active}`}>
              1
            </button>
            <button className={styles.paginationItem}>2</button>
            <button className={styles.paginationItem}>3</button>
            <button className={styles.paginationItem}>4</button>
            <button className={styles.paginationItem}>5</button>
            <button className={styles.paginationItem}>›</button>
            <button className={styles.paginationItem}>»</button>
          </nav>
        </article>
      </main>
    </>
  );
};
