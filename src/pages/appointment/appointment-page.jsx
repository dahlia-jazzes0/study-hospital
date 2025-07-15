import { useState } from 'react';
import { DoctorList } from './appointment-doctor-list';
import { AppointmentCalendar } from './appointment-calendar';
import { GetDoctors, GetTimeTable } from './use-appointment';
import styles from './appointment-page.module.css';

export function AppointmentPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { doctors, isLoading } = GetDoctors();
  const { timeTable } = GetTimeTable();

  // const timeTable = [
  //   { time: '10:00', available: true },
  //   { time: '10:30', available: false },
  //   { time: '11:00', available: true },
  //   { time: '11:30', available: true },
  //   { time: '12:00', available: true },
  //   { time: '12:30', available: true },
  //   { time: '13:00', available: false },
  //   { time: '13:30', available: false },
  //   { time: '14:00', available: true },
  //   { time: '14:30', available: true },
  //   { time: '15:00', available: true },
  //   { time: '15:30', available: true },
  //   { time: '16:00', available: true },
  //   { time: '16:30', available: true },
  //   { time: '17:00', available: true },
  //   { time: '17:30', available: true },
  //   { time: '18:00', available: true },
  //   { time: '18:30', available: true },
  //   { time: '19:00', available: true },
  //   { time: '19:30', available: true },
  // ];

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time) => {
    console.log('Selected time:', time);
  };

  return (
    <main className={styles.appointment}>
      <h1>진료예약</h1>
      <DoctorList doctors={doctors} isLoading={isLoading} />
      <AppointmentCalendar
        value={selectedDate}
        onChange={handleDateChange}
        timeTable={timeTable}
        onTimeSelect={handleTimeSelect}
      />
    </main>
  );
}
