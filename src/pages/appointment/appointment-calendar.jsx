import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import React from 'react';
import styles from './appointment-calendar.module.css';

export const AppointmentCalendar = React.memo(function AppointmentCalendar({
  onDateSelect,
  handleNavigationChange,
  holidays,
  isHolidayDate,
  isWeekend,
  isDisabledDate,
}) {
  const tileClassName = React.useCallback(
    ({ date }) => {
      const isHoliday = isHolidayDate(date, holidays);
      const isWeekendDay = isWeekend(date);

      if (isHoliday) return 'holiday';
      if (isWeekendDay) return 'weekend';
      return null;
    },
    [isHolidayDate, holidays, isWeekend]
  );

  const tileDisabled = React.useCallback(
    ({ date }) => {
      return isDisabledDate(date, holidays);
    },
    [isDisabledDate, holidays]
  );

  const formatDay = React.useCallback((locale, date) => date.getDate(), []);

  return (
    <div className={styles.appointmentCalendar}>
      <h2 className={styles.srOnly}>예약 달력</h2>
      <Calendar
        className={styles.medicalBookingCalendar}
        onChange={onDateSelect}
        calendarType="gregory"
        prevAriaLabel="이전 달"
        nextAriaLabel="다음 달"
        prev2Label={null}
        next2Label={null}
        showNeighboringMonth={false}
        formatDay={formatDay}
        minDate={new Date()}
        onActiveStartDateChange={handleNavigationChange}
        tileClassName={tileClassName}
        tileDisabled={tileDisabled}
      />
    </div>
  );
});
