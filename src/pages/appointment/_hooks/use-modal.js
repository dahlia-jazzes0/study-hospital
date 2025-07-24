import { useState } from 'react';

// 모달 동작
export function useModal() {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);

  const openConfirmModal = () => setIsConfirmModalOpen(true);
  const closeConfirmModal = () => setIsConfirmModalOpen(false);

  const openCancelModal = () => setIsCancelModalOpen(true);
  const closeCancelModal = () => setIsCancelModalOpen(false);

  return {
    isConfirmModalOpen,
    isCancelModalOpen,
    openConfirmModal,
    closeConfirmModal,
    openCancelModal,
    closeCancelModal,
  };
}
