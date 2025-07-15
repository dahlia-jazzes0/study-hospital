import styles from './appointment-page.module.css';

export function DoctorCard({ doctor }) {
  return (
    <li className={styles.doctorCard}>
      <img src={doctor.image} alt={doctor.name} />
      <div className={styles.doctorDescription}>
        <p>?두방 내꽈 전문의?</p>
        <p>
          {doctor.name}&nbsp;
          {doctor.chief ? '대표원장' : '원장'}
        </p>
        <div className={styles.department}>
          <p>대표 진료과목</p>
          <ul>
            {doctor.specialties.map((specialty, index) => (
              <li key={index}>{specialty}</li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}
