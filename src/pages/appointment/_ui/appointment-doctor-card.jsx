import React from 'react';
import styles from './appointment-doctor-card.module.css';

export const DoctorCard = React.memo(function DoctorCard({
  doctor,
  isSelected,
  onSelect,
}) {
  const HEAD_ID = '1';

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onSelect();
    }
  };

  return (
    <li
      className={`${styles.doctorCard} ${isSelected ? styles.selected : ''}`}
      onClick={onSelect}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-pressed={isSelected}
    >
      <img
        src={`images/appointment/doctor-profile-${doctor.id}.png`}
        alt={doctor.name}
        loading="lazy"
      />
      <div className={styles.doctorDescription}>
        <p>
          {doctor.departmentName} {doctor.chief && '전문의'}
        </p>
        <p>
          {doctor.name}&nbsp;
          {doctor.id === HEAD_ID ? '대표원장' : '원장'}
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
