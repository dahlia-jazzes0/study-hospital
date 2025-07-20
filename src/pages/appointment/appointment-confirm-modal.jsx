import { Modal } from './appointment-modal';
import styles from './appointment-page.module.css';
import { formatToKoreanDate, formattedTime } from './util';

export function ConfirmModal({
  appointmentData,
  onClose,
  onAppointmentSubmit,
}) {
  return (
    <Modal onClose={onClose}>
      <>
        <div className={styles.modalMessage}>
          <p>
            {formatToKoreanDate(appointmentData?.date)} / &nbsp;
            {formattedTime(appointmentData?.time)} 시
          </p>
          <p>예약하시겠습니까?</p>
        </div>
        <div className={styles.modalButtons}>
          <button className={styles.confirmButton} onClick={onClose}>
            취소
          </button>
          <button className={styles.cancelButton} onClick={onAppointmentSubmit}>
            예약 확정
          </button>
        </div>
      </>
    </Modal>
  );
}
