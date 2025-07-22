import styles from './appointment-button-wrap.module.css';

export function AppointmentButtonWrap({
  handleCloseConfirmModal,
  isAppointmentComplete,
  myAppointments,
  handleCloseCancleModal,
}) {
  return (
    <div className={styles.appointmentButtonWrap}>
      <button
        className={styles.appointmentButton}
        onClick={handleCloseConfirmModal}
        disabled={!isAppointmentComplete}
      >
        {isAppointmentComplete ? (
          '예약하기'
        ) : (
          <>
            의사/날짜/시간
            <br />
            선택해주세요
          </>
        )}
      </button>
      {myAppointments.length > 0 && (
        <button
          className={styles.appointmentButton}
          onClick={handleCloseCancleModal}
        >
          예약 확인·취소
        </button>
      )}
    </div>
  );
}
