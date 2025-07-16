import { DoctorCard } from './appointment-doctor-card';
import { SkeletonCard } from './appointment-skeleton-card';
import styles from './appointment-page.module.css';

export function DoctorList({
  doctors,
  isLoading,
  selectedDoctorId,
  onDoctorSelect,
}) {
  return (
    <section className={styles.doctorList}>
      <h2 className={styles.srOnly}>의료진 목록</h2>
      <ul className={styles.cardList}>
        {!isLoading
          ? doctors.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
                isSelected={selectedDoctorId === doctor.id}
                onSelect={() => onDoctorSelect(doctor.id, doctor.name)}
              />
            ))
          : Array.from({ length: 7 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
      </ul>
    </section>
  );
}
