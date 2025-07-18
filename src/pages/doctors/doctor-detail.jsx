import styles from '@/pages/doctors/doctor-card.module.css';
import { Link } from 'react-router';

function DoctorDetail({ doctor }) {
  return (
    <section className={styles.doctorDescription}>
      <h4 className={styles.srOnly}>소개말</h4>
      <div className={styles.descriptionText}>
        {doctor.description
          .split('.')
          .filter((text) => text.trim() !== '')
          .map((text, i) => (
            <p key={i}>{text}.</p>
          ))}
      </div>
      <button className={styles.reservationButton}>예약하기</button>
    </section>
  );
}

export { DoctorDetail };
