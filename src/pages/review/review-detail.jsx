import { useParams, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { getReviewDetail } from '@/pages/review/review-api';
import styles from '@/pages/review/review-detail.module.css';

export function ReviewDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [review, setReview] = useState(null);

  useEffect(() => {
    console.log('넘어오는 id 값:', id, typeof id);

    getReviewDetail(id)
      .then(setReview)
      .catch((error) => {
        console.error('리뷰 불러오기 실패:', error);
      });
  }, [id]);

  if (!review) return <p>불러오는 중...</p>;

  return (
    <>
      <section
        className={styles.bannerSection}
        aria-label="메인 배너"
      ></section>

      <main className={styles.reviewContainer}>
        <section className={styles.reviewDetailSection}>
          <h2 className={styles.detailTitle}>치료후기</h2>
          <div className={styles.reviewItemTopLine}></div>
          <div className={styles.reviewDetailHeader}>
            <h3 className={styles.reviewDetailTitle}>{review.title}</h3>
            <p className={styles.reviewDetailDate}>
              {new Date(review.createdAt).toISOString().slice(0, 10)}
            </p>
          </div>
          <div className={styles.reviewItemBottomLine}></div>
          <img className={styles.reviewDetailContent} src={review.content} />
          <button
            className={styles.reviewListBtn}
            onClick={() => navigate('/review-list')}
          >
            목록
          </button>
        </section>
      </main>
    </>
  );
}
