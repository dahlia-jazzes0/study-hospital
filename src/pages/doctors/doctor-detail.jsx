import { Link } from 'react-router';
import styles from '@/pages/doctors/doctor-card.module.css';

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
      <Link
        to={`/appointment?doctorId=${doctor.id}`}
        className={styles.reservationButton}
      >
        예약하기
      </Link>
    </section>
  );
}

export { DoctorDetail };
