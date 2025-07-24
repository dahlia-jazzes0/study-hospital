import styles from './appointment-button-wrap.module.css';

export function AppointmentButtonWrap({
  openConfirmModal,
  openCancelModal,
  isAppointmentComplete,
  myAppointments,
}) {
  return (
    <div className={styles.appointmentButtonWrap}>
      <button
        className={styles.appointmentButton}
        onClick={openConfirmModal}
        disabled={!isAppointmentComplete}
      >
        {isAppointmentComplete ? (
          '예약하기'
        ) : (
          <p>
            의사/날짜/시간
            <br />
            선택해주세요
          </p>
        )}
      </button>
      {myAppointments.length > 0 && (
        <button className={styles.appointmentButton} onClick={openCancelModal}>
          예약 확인·취소
        </button>
      )}
    </div>
  );
}
