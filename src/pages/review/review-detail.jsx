import { getReviewDetail } from '@/pages/review/review-api';
import styles from '@/pages/review/review-detail.module.css';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';

export function ReviewDetailPage() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log('넘어오는 id 값:', id, typeof id);

    getReviewDetail(id)
      .then((review) => {
        setData({
          review,
          error: null,
        });
      })
      .catch((error) => {
        setData({
          review: null,
          error: error.error,
        });
        console.error('리뷰 불러오기 실패:', error);
      });
  }, [id]);

  if (!data) return <LoadingView />;
  if (data.error) return <ErrorView message={data.error.message} />;

  return <ReviewDetailView review={data.review} />;
}

function LoadingView() {
  return <p>불러오는 중...</p>;
}

function ErrorView({ message }) {
  return <p>에러: {message}</p>;
}

function ReviewDetailView({ review }) {
  return (
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
        <Link to="/reviews" className={styles.reviewListBtn}>
          목록
        </Link>
      </section>
    </main>
  );
}
