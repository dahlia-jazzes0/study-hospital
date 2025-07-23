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
  isLogin,
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
      <h2 className="sr-only">예약 달력</h2>
      <div className={styles.calendarWrapper}>
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
        {!isLogin && (
          <div className={styles.loginOverlay}>
            <div className={styles.loginMessage}>
              로그인이 필요한 서비스입니다
            </div>
          </div>
        )}
      </div>
    </div>
  );
});
