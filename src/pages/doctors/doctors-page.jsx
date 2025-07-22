import { DoctorList } from '@/pages/doctors/doctor-list.jsx';
import styles from '@/pages/doctors/doctor-card.module.css';

export function DoctorsPage() {
  return (
    <section className={styles.doctorSection}>
      <DoctorList />
    </section>
  );
}
