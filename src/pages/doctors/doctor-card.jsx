import { useState } from 'react';
import styles from '@/pages/doctors/doctor-card.module.css';
import { DoctorDetail } from './doctor-detail';
import { ChevronDown } from 'lucide-react';

export function DoctorCard({ doctor, departmentName }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetail = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <li className={`${styles.doctorCard} ${isOpen ? styles.open : ''}`}>
      <img
        src={`${import.meta.env.BASE_URL}images/doctor-${doctor.id}.png`}
        alt={`${doctor.name} 이미지`}
        className={styles.doctorImage}
      />

      <section className={styles.doctorInfo}>
        <h3 className={styles.doctorName}>
          {doctor.name} {doctor.chief && '대표'}원장 ({departmentName})
        </h3>

        <dl className={styles.doctorDetails}>
          <div className={styles.detailItem}>
            <dt className={styles.detailLabel}>학력</dt>
            <dd className={styles.detailValue}>{doctor.education}</dd>
          </div>

          <div className={styles.detailItem}>
            <dt className={styles.detailLabel}>경력</dt>
            {doctor.experience.map((item, i) => (
              <dd key={i} className={styles.detailValue}>
                {item}
              </dd>
            ))}
          </div>

          <div className={styles.detailItem}>
            <dt className={styles.detailLabel}>자격 및 인증</dt>
            {doctor.certifications.map((item, i) => (
              <dd key={i} className={styles.detailValue}>
                {item}
              </dd>
            ))}
          </div>

          <div className={styles.detailItem}>
            <dt className={styles.detailLabel}>학회 활동</dt>
            {doctor.scholarActivities.map((item, i) => (
              <dd key={i} className={styles.detailValue}>
                {item}
              </dd>
            ))}
          </div>
        </dl>
        <button className={styles.toggleButton} onClick={toggleDetail}>
          <ChevronDown className={styles.arrowIcon} />
        </button>
        {isOpen && <DoctorDetail doctor={doctor} />}
      </section>
    </li>
  );
}
