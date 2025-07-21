import { Modal } from './appointment-modal';
import styles from './appointment-page.module.css';
import { formattedTime, formatToKoreanDate, getDoctorName } from './util';

export function CancleModal({
  getMyAppointment,
  myAppointments,
  onClose,
  deleteAppointment,
}) {
  const handleDeleteAppointment = async (id) => {
    try {
      await deleteAppointment(id, onClose);
      getMyAppointment();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Modal onClose={onClose}>
      <>
        <div className={styles.appointmentListWrapper}>
          <div className={styles.appointmentList}>
            {myAppointments.map((myAppointment) => (
              <div
                key={myAppointment.id}
                className={styles.myAppointmentWrapper}
              >
                <div className={styles.myAppointment}>
                  <p>
                    {formatToKoreanDate(myAppointment?.appointmentDate)}
                    &nbsp;/&nbsp;
                    {formattedTime(myAppointment?.appointmentTime)} 시
                  </p>
                  <p>
                    {getDoctorName(myAppointment?.doctorId)} 선생님 예약입니다.
                  </p>
                </div>
                <button
                  className={styles.cancelButton}
                  onClick={() => handleDeleteAppointment(myAppointment.id)}
                >
                  예약 취소
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.modalButtons}>
          <button className={styles.confirmButton} onClick={onClose}>
            확인
          </button>
        </div>
      </>
    </Modal>
  );
}
