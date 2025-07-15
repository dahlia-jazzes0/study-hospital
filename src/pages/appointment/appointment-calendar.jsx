import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { TimeTable } from './appointment-timetable';
import styles from './appointment-page.module.css';
import { AppointmentDescription } from './appointment-description';

export function AppointmentCalendar({
  value,
  onChange,
  timeTable,
  onTimeSelect,
}) {
  return (
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
          <TimeTable
            key={index}
            time={times.time}
            available={times.available}
            onTimeSelect={onTimeSelect}
          />
        ))}
      </ul>
      <AppointmentDescription />
    </section>
  );
}
