import { useState } from 'react';
import { useNavigate } from 'react-router';
import LoginModal from '@/pages/review/login-modal';
import { ReviewPage } from '@/pages/review/review-page';

export function ReviewClickHandler() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const navigate = useNavigate();

  const handleReviewClick = (id) => {
    console.log('클릭됨:', id, typeof id);
    const token = localStorage.getItem('accessToken');
    if (!token) {
      setShowLoginModal(true);
    } else {
      navigate(`/reviews/${id}`);
    }
  };

  return (
    <>
      <ReviewPage onReviewClick={handleReviewClick} />
      {showLoginModal && (
        <LoginModal onClose={() => setShowLoginModal(false)} />
      )}
    </>
  );
}
