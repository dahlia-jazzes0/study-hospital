import styles from './appointment-page.module.css';

export function ConfirmModal({
  appointmentData,
  onClose,
  onAppointmentSubmit,
}) {
  return (
    <>
      <div className={styles.modalMessage}>
        <p>
          {appointmentData?.date} / &nbsp;
          {appointmentData?.time}
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
  );
}
