import styles from './appointment-page.module.css';

export function CancleModal({ onClose, appointmentData }) {
  return (
    <>
      <div className={styles.modalMessage}>
        <p>{appointmentData?.doctor?.name} 고객님의 예약 일시는</p>
        <p>
          {appointmentData?.date} / &nbsp;
          {appointmentData?.time} 입니다
        </p>
      </div>
      <div className={styles.modalButtons}>
        <button className={styles.confirmButton} onClick={onClose}>
          확인
        </button>
        <button className={styles.cancelButton} onClick={onClose}>
          예약 취소
        </button>
      </div>
    </>
  );
}
