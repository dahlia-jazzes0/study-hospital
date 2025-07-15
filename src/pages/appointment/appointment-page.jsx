import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { useEffect, useState } from 'react';
import styles from './appointment-page.module.css';
import { API_CONFIG } from './config';

export function AppointmentPage() {
  const [value, onChange] = useState(new Date());
  const timeTable = [
    {
      time: '10:00',
      available: true,
    },
    {
      time: '10:30',
      available: false,
    },
    {
      time: '11:00',
      available: true,
    },
    {
      time: '11:30',
      available: true,
    },
    {
      time: '12:00',
      available: true,
    },
    {
      time: '12:30',
      available: true,
    },
    {
      time: '13:00',
      available: false,
    },
    {
      time: '13:30',
      available: false,
    },
    {
      time: '14:00',
      available: true,
    },
    {
      time: '14:30',
      available: true,
    },
    {
      time: '15:00',
      available: true,
    },
    {
      time: '15:30',
      available: true,
    },
    {
      time: '16:00',
      available: true,
    },
    {
      time: '16:30',
      available: true,
    },
    {
      time: '17:00',
      available: true,
    },
    {
      time: '17:30',
      available: true,
    },
    {
      time: '18:00',
      available: true,
    },
    {
      time: '18:30',
      available: true,
    },
    {
      time: '19:00',
      available: true,
    },
    {
      time: '19:30',
      available: true,
    },
  ];

  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchDortors = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.DOCTORS}`,
          {
            method: 'GET',
            headers: {
              ...API_CONFIG.HEADERS,
            },
          }
        );

        if (!response.ok) {
          throw new Error('Doctors 정보 조회 실패!');
        }

        const result = await response.json();
        setDoctors(result);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDortors();
  }, []);

  return (
    <>
      <main className={styles.appointment}>
        <h1>진료예약</h1>
        <section className={styles.doctorList}>
          <h2 className={styles.srOnly}>의료진 목록</h2>
          <ul className={styles.cardList}>
            {!isLoading
              ? doctors.map((doctor) => (
                  <li key={doctor.id} className={styles.doctorCard}>
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
                          {doctor.specialties.map((speacialty, index) => (
                            <li key={index}>{speacialty}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                ))
              : Array.from({ length: 7 }).map((_, index) => (
                  <li
                    key={index}
                    className={styles.loadingCard}
                    aria-label="의사 정보 로딩 중"
                  >
                    <div className={styles.loadingImage}></div>
                    <div className={styles.loadingCardDescription}>
                      <div className={styles.loadingText}></div>
                      <div className={styles.loadingText}></div>
                      <div className={styles.loadingDepartment}></div>
                      <div className={styles.loadingDepartment}></div>
                    </div>
                  </li>
                ))}
          </ul>
        </section>
        <section className={styles.appointmentCalendar}>
          <h2 className={styles.srOnly}>예약 선택 달력</h2>
          <Calendar
            className={styles.medicalBookingCalendar}
            onChange={onChange}
            value={value}
            calendarType="gregory"
            prev2Label={null}
            next2Label={null}
            showNeighboringMonth={false}
            formatDay={(locale, date) => date.getDate()}
          />
          <ul className={styles.timeTable}>
            {timeTable.map((times, index) => (
              <li key={index}>
                <button
                  className={
                    times.available ? styles.available : styles.unavailable
                  }
                >
                  {times.time}
                </button>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
