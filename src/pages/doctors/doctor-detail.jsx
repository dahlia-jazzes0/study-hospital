import { useState } from 'react';
import styles from '@/pages/doctors/doctor-card.module.css';

function DoctorDetail({ doctor }) {
  const [isOpen, setIsOpen] = useState(false);

  const ShowDetail = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <button className={styles.toggleButton} onClick={ShowDetail}>
        <img
          src={`${import.meta.env.BASE_URL}images/arrow.png`}
          alt="의료진 상세 정보 버튼"
          className={styles.arrowIcon}
        />
      </button>

      {isOpen && (
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
      )}
    </>
  );
}

export { DoctorDetail };
