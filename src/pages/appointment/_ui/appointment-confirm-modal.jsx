import { Modal } from '../appointment-modal';
import { formatToKoreanDate, formattedTime } from '../util';
import styles from './appointment-confirm-modal.module.css';

export function ConfirmModal({
  appointmentData,
  getMyAppointment,
  resetAppointment,
  submitAppointment,
  onClose,
}) {
  const handleAppointmentSubmit = async () => {
    try {
      await submitAppointment();
      alert('예약이 완료되었습니다!');
      resetAppointment();
      onClose();
      await getMyAppointment();
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <Modal onClose={onClose}>
      <div className={styles.modalMessage}>
        <p>
          {formatToKoreanDate(appointmentData?.date)}
          <br />
          {formattedTime(appointmentData?.time)} 시
        </p>
        <p>예약하시겠습니까?</p>
      </div>
      <div className={styles.modalButtons}>
        <button className={styles.confirmButton} onClick={onClose}>
          취소
        </button>
        <button
          className={styles.cancelButton}
          onClick={handleAppointmentSubmit}
        >
          예약 확정
        </button>
      </div>
    </Modal>
  );
}
