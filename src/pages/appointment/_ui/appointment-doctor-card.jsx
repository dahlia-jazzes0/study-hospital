import React from 'react';
import styles from './appointment-doctor-card.module.css';

const DOCTOR_IMAGES = {
  1: 'images/appointment/doctor-profile-1.png',
  2: 'images/appointment/doctor-profile-2.png',
  3: 'images/appointment/doctor-profile-3.png',
  4: 'images/appointment/doctor-profile-4.png',
  5: 'images/appointment/doctor-profile-5.png',
  6: 'images/appointment/doctor-profile-6.png',
  7: 'images/appointment/doctor-profile-7.png',
};

export const DoctorCard = React.memo(function DoctorCard({
  doctor,
  isSelected,
  onSelect,
}) {
  return (
    <li
      className={`${styles.doctorCard} ${isSelected ? styles.selected : ''}`}
      onClick={onSelect}
    >
      <img src={DOCTOR_IMAGES[doctor.id]} alt={doctor.name} loading="lazy" />
      <div className={styles.doctorDescription}>
        <p>?두방 내꽈? 전문의</p>
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
});
