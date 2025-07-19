import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { TimeTable } from './appointment-timetable';
import { AppointmentDescription } from './appointment-description';
import styles from './appointment-page.module.css';

export function AppointmentCalendar({
  timeTable,
  appointmentData,
  isTimeTableLoading,
  onDateSelect,
  onTimeSelect,
  onAppointmentSubmit,
  isAppointmentComplete,
  handleNavigationChange,
  holidays,
  isHolidayDate,
}) {
  // 공휴일 체크 함수

  return (
    <section className={styles.appointmentCalendar}>
      <h2 className={styles.srOnly}>예약 달력</h2>

      <Calendar
        className={styles.medicalBookingCalendar}
        onChange={onDateSelect}
        calendarType={'gregory'}
        prevAriaLabel={'이전 달'}
        nextAriaLabel={'다음 달'}
        prev2Label={null}
        next2Label={null}
        showNeighboringMonth={false}
        formatDay={(locale, date) => date.getDate()}
        minDate={new Date()}
        onActiveStartDateChange={({ view, activeStartDate }) => {
          handleNavigationChange({ activeStartDate, view });
        }}
        tileClassName={({ date }) => {
          return isHolidayDate(date, holidays) ? 'holiday' : null;
        }}
        tileDisabled={({ date }) => {
          return isHolidayDate(date, holidays);
        }}
      />

      {appointmentData.doctor && appointmentData.date && (
        <div className={styles.timeTableContainer}>
          {isTimeTableLoading ? (
            <div className={styles.loadingMessage}>시간표 로딩 중...</div> // titmeTable skelton 구현 및 css 추가
          ) : (
            <ul className={styles.timeTable}>
              {timeTable.map((times, index) => (
                <TimeTable
                  key={index}
                  time={times.time}
                  available={times.available}
                  isSelected={appointmentData.time === times.time}
                  onTimeSelect={() => onTimeSelect(times.time)}
                />
              ))}
            </ul>
          )}
        </div>
      )}

      <AppointmentDescription
        onAppointmentSubmit={onAppointmentSubmit}
        isAppointmentComplete={isAppointmentComplete}
        appointmentData={appointmentData}
      />
    </section>
  );
}
