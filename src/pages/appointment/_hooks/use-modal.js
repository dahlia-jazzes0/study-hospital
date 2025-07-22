import { useState } from 'react';

// 모달 동작
export function useModal() {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showCancleModal, setShowCancleModal] = useState(false);

  const handleCloseConfirmModal = () => {
    setShowConfirmModal(!showConfirmModal);
  };

  const handleCloseCancleModal = () => {
    setShowCancleModal(!showCancleModal);
  };

  return {
    showConfirmModal,
    showCancleModal,
    handleCloseConfirmModal,
    handleCloseCancleModal,
  };
}
