import { DoctorCard } from '@/pages/doctors/doctor-card.jsx';
import styles from '@/pages/doctors/doctor-card.module.css';

export function DoctorsPage() {
  return (
    <section className={styles.doctorSection}>
      <DoctorCard />
    </section>
  );
}
