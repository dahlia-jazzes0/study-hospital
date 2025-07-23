import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ReviewCard } from '@/pages/main/components/review-card.jsx';
import { useAuth } from '@/shared/auth/auth-context.jsx';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './review-section.module.css';

const API_BASE_URL =
  'https://hospital-api.dahlia-jazzes0.workers.dev/api/articles/';

async function fetchReviewsFromApi({ page = 1, limit = 6 }) {
  const headers = {
    'Content-Type': 'application/json',
  };

  const params = new URLSearchParams({ page, limit });
  const res = await fetch(`${API_BASE_URL}?${params}`, { headers });

  if (!res.ok) {
    throw new Error('리뷰를 불러오지 못했습니다');
  }

  return await res.json();
}

export function ReviewSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviewData, setReviewData] = useState([]);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const data = await fetchReviewsFromApi({ limit: 6 });
        setReviewData(data.articles || []);
      } catch (error) {
        console.error('리뷰 로딩 실패:', error);
        setReviewData([]);
      }
    };

    loadReviews();
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleNextClick = () => {
    const maxIndex = Math.max(0, reviewData.length - 3);
    setCurrentIndex((prevIndex) =>
      prevIndex < maxIndex ? prevIndex + 1 : maxIndex
    );
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toISOString().slice(0, 10).replace(/-/g, '.');
  };

  const handleCardClick = (reviewId) => {
    if (!isAuthenticated) {
      alert('치료후기를 확인하시려면 로그인이 필요합니다!');
      navigate('/login');
      return;
    }
    navigate(`/reviews/${reviewId}`);
  };

  return (
    <section className={styles.reviewSection}>
      <header className={styles.reviewWrap}>
        <div className={styles.reviewTitle}>
          <h2>모두한방 치료후기</h2>
          <p>모두한의원의 생생한 치료후기를 확인하세요!</p>
        </div>

        <nav
          className={styles.carouselControls}
          aria-label="치료후기 캐러셀 컨트롤"
        >
          <button
            onClick={handlePrevClick}
            aria-label="이전 후기 보기"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className={styles.arrowPrev} />
          </button>
          <button
            onClick={handleNextClick}
            aria-label="다음 후기 보기"
            disabled={currentIndex >= Math.max(0, reviewData.length - 3)}
          >
            <ChevronRight className={styles.arrowNext} />
          </button>
        </nav>
      </header>

      <div className={styles.reviewCardsContainer}>
        <ul
          className={styles.reviewCards}
          style={{
            transform: `translateX(-${currentIndex * 322}px)`,
          }}
        >
          {reviewData.map((review) => (
            <li key={review.id}>
              <div
                onClick={() => handleCardClick(review.id)}
                style={{ cursor: 'pointer' }}
              >
                <ReviewCard
                  title={review.title}
                  date={formatDate(review.createdAt)}
                  thumbnail={review.thumbnail}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
