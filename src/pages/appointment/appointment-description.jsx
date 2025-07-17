import styles from './appointment-page.module.css';
import { formattedTime } from './util';

export function AppointmentDescription({
  onAppointmentSubmit,
  isAppointmentComplete,
  appointmentData,
}) {
  return (
    <div className={styles.appointmentDescription}>
      <h3>간편예약 확인 / 취소</h3>

      <div className={styles.appointmentDetail}>
        <p>
          모두한의원은 고객님의 편의를 위하여, 홈페이지를 통하여 원하는 의료진과
          진료 일정을 직접 선택하여 예약/취소 까지 직접 할 수 있도록 서비스 하고
          있습니다.
        </p>
        <p>
          인터넷 예약은 진료과를 참고하여 원하는 진료를 받고자 하는 의료진을
          선택하여 날짜와 시간을 선택해 진행해주십시오.
        </p>
        <p>
          온라인상 예약은 로그인 한 회원에 한 해 진행하실 수 있으며 예약 확인 및
          취소는 하단의 버튼을 눌러 진행해주십시오.
        </p>
      </div>
      {(appointmentData.doctor ||
        appointmentData.date ||
        appointmentData.time) && (
        <div className={styles.appointmentInfo}>
          <h4>선택된 예약 정보</h4>
          <table className={styles.infoTable}>
            <tbody>
              <tr>
                <td className={styles.infoLabel}>의 료 진</td>
                <td className={`${styles.infoValue} ${styles.doctorName}`}>
                  {appointmentData.doctor.id
                    ? `${appointmentData.doctor.name} (?두방 내꽈?)`
                    : '선택되지 않음'}
                </td>
              </tr>
              <tr>
                <td className={styles.infoLabel}>예 약 날 짜</td>
                <td className={`${styles.infoValue} ${styles.appointmentDate}`}>
                  {appointmentData.date || '선택되지 않음'}
                </td>
              </tr>
              <tr>
                <td className={styles.infoLabel}>예 약 시 간</td>
                <td className={`${styles.infoValue} ${styles.appointmentTime}`}>
                  {appointmentData.time
                    ? formattedTime(appointmentData.time)
                    : '선택되지 않음'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      <div className={styles.buttonGroup}>
        <button
          className={styles.appointmentButton}
          onClick={onAppointmentSubmit}
          disabled={!isAppointmentComplete}
        >
          {isAppointmentComplete
            ? '예약하기'
            : '"의사/날짜/시간"을 모두 선택해주세요'}
        </button>

        <button className={styles.cancelButton}>예약 확인·취소</button>
      </div>
    </div>
  );
}
