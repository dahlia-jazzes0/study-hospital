import { formattedTime } from '../util';
import styles from './appointment-selected-information.module.css';

export function SelectedInformation({ appointmentData }) {
  return (
    <div className={styles.appointmentInfo}>
      <h4>선택된 예약 정보</h4>
      <table className={styles.infoTable}>
        <tbody>
          <tr>
            <td className={styles.infoLabel}>의료진</td>
            <td className={`${styles.infoValue} ${styles.doctorName}`}>
              {appointmentData.doctor.id
                ? `${appointmentData.doctor.name} (${appointmentData.doctor.departmentName})`
                : '선택되지 않음'}
            </td>
          </tr>
          <tr>
            <td className={styles.infoLabel}>예약날짜</td>
            <td className={`${styles.infoValue} ${styles.appointmentDate}`}>
              {appointmentData.date || '선택되지 않음'}
            </td>
          </tr>
          <tr>
            <td className={styles.infoLabel}>예약시간</td>
            <td className={`${styles.infoValue} ${styles.appointmentTime}`}>
              {appointmentData.time
                ? formattedTime(appointmentData.time)
                : '선택되지 않음'}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
