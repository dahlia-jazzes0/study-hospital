import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { useState } from 'react';
import styles from './appointment-page.module.css';
import '@/shared/styles/base.css';
import '@/shared/styles/reset.css';

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
  const doctors = [
    {
      id: 1,
      name: '최재호',
      specialty: '한방내과 전문의',
      positions: '대표원장',
      medicaldepartment: [
        '소화기계 질환',
        '호흡기계 질환',
        '내분비ㆍ대사 질환',
      ],
      image: '/',
    },
    {
      id: 2,
      name: '양호진',
      specialty: '한방내과',
      positions: '원장',
      medicaldepartment: [
        '교통사고 후유증',
        '순환기계 질환',
        '피로ㆍ면역력 저하',
      ],
      image: '/',
    },
    {
      id: 3,
      name: '양호진',
      specialty: '한방내과',
      positions: '원장',
      medicaldepartment: [
        '교통사고 후유증',
        '순환기계 질환',
        '피로ㆍ면역력 저하',
      ],
      image: '/',
    },
    {
      id: 4,
      name: '양호진',
      specialty: '한방내과',
      positions: '원장',
      medicaldepartment: [
        '교통사고 후유증',
        '순환기계 질환',
        '피로ㆍ면역력 저하',
      ],
      image: '/',
    },
  ];

  return (
    <>
      <main className={styles.appointment}>
        <h1>진료예약</h1>
        <section className={styles.doctorList}>
          <h2 className={styles.srOnly}>의료진 목록</h2>
          <ul className={styles.cardList}>
            {doctors.map((doctor) => (
              <li key={doctor.id} className={styles.doctorCard}>
                <img src={doctor.image} alt={doctor.name} />
                <div className={styles.doctorDescription}>
                  <p>{doctor.specialty}</p>
                  <p>
                    {doctor.name} &nbsp;
                    {doctor.positions}
                  </p>
                  <div className={styles.department}>
                    <p>대표 진료과목</p>
                    <ul>
                      <li>{doctor.medicaldepartment[0]}</li>
                      <li>{doctor.medicaldepartment[1]}</li>
                      <li>{doctor.medicaldepartment[2]}</li>
                    </ul>
                  </div>
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
