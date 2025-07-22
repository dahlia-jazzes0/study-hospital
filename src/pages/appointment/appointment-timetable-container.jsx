import React from 'react';
import { TimeTable } from './_ui/appointment-timetable';
import { SkeletonTimeTable } from './_ui/appointment-skeleton-timetable';
import styles from './appointment-timetable-container.module.css';

export const TimeTableContainer = React.memo(function TimeTableContainer({
  isTimeTableLoading,
  timeTable,
  appointmentData,
  onTimeSelect,
}) {
  const skeletonItems = React.useMemo(
    () =>
      Array.from({ length: 20 }, (_, index) => (
        <SkeletonTimeTable key={`skeleton-${index}`} />
      )),
    []
  );

  const createTimeSelectHandler = React.useCallback(
    (time) => () => onTimeSelect(time),
    [onTimeSelect]
  );

  return (
    <div className={styles.timeTableContainer}>
      <ul className={styles.timeTable}>
        {isTimeTableLoading
          ? skeletonItems
          : timeTable.map((times, index) => (
              <TimeTable
                key={index}
                time={times.time}
                available={times.available}
                isSelected={appointmentData.time === times.time}
                onTimeSelect={createTimeSelectHandler(times.time)}
              />
            ))}
      </ul>
    </div>
  );
});
