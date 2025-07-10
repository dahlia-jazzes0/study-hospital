import React from 'react';
import '@/pages/review/review-page.css';

export const ReviewPage = () => {
  return (
    <>
      {/* Banner Section - 전체 화면 너비 */}
      <section
        className="review-page-banner-section"
        aria-label="메인 배너"
      ></section>

      <main className="review-page-container">
        {/* Page Content */}
        <article>
          {/* Page Header */}
          <header className="review-page-page-header">
            <h1 className="review-page-page-title">치료후기</h1>

            {/* Category Tags */}
            <nav className="review-page-category-tags" aria-label="카테고리">
              <span className="review-page-tag active">전체보기</span>
              <span className="review-page-tag inactive">한방내과</span>
              <span className="review-page-tag inactive">한방정형외과</span>
              <span className="review-page-tag inactive">한방부인과</span>
              <span className="review-page-tag inactive">한방소아과</span>
              <span className="review-page-tag inactive">다이어트클리닉</span>
            </nav>
          </header>

          {/* Search Section */}
          <section className="review-page-search-info" aria-label="검색">
            <div className="review-page-info">
              <span className="review-page-total-count">Total: 342</span>
              <span className="review-page-search-scope"></span>
            </div>
            <div className="review-page-search-input-group">
              <input
                type="search"
                className="review-page-search-input"
                placeholder="검색어 입력"
                aria-label="검색어 입력"
              />
              <button type="submit" className="review-page-search-button">
                검색
              </button>
            </div>
          </section>

          {/* Content Area */}
          <section className="review-page-content-area">
            {/* Main Content */}
            <section className="review-page-main-content" role="main">
              <article className="review-page-content-box">영역 1</article>
              <article className="review-page-content-box">영역 2</article>
              <article className="review-page-content-box">영역 3</article>
              <article className="review-page-content-box">영역 4</article>
              <article className="review-page-content-box">영역 5</article>
              <article className="review-page-content-box">영역 6</article>
            </section>
          </section>

          {/* Pagination */}
          <nav
            className="review-page-pagination"
            aria-label="페이지 네비게이션"
          >
            <button className="review-page-pagination-item disabled">«</button>
            <button className="review-page-pagination-item disabled">‹</button>
            <button className="review-page-pagination-item active">1</button>
            <button className="review-page-pagination-item">2</button>
            <button className="review-page-pagination-item">3</button>
            <button className="review-page-pagination-item">4</button>
            <button className="review-page-pagination-item">5</button>
            <button className="review-page-pagination-item">›</button>
            <button className="review-page-pagination-item">»</button>
          </nav>
        </article>
      </main>
    </>
  );
};
