import { useNavigate } from 'react-router';
import { ReviewPage } from '@/pages/review/review-page';

export function ReviewClickHandler() {
  const navigate = useNavigate();

  const handleReviewClick = (id) => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      alert('로그인이 필요한 서비스입니다');
      navigate('/login-page');
      return;
    }
    navigate(`/reviews/${id}`);
  };

  return <ReviewPage onReviewClick={handleReviewClick} />;
}
