import { DoctorCard } from './appointment-dortor-card';
import { SkeletonCard } from './appointment-skeleton-card';
import styles from './appointment-page.module.css';

export function DoctorList({ doctors, isLoading }) {
  return (
    <section className={styles.doctorList}>
      <h2 className={styles.srOnly}>의료진 목록</h2>
      <ul className={styles.cardList}>
        {!isLoading
          ? doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))
          : Array.from({ length: 7 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
      </ul>
    </section>
  );
}
