import React from 'react';
import { formattedTime } from '../util';
import styles from './appointment-timetable.module.css';

export function TimeTable({ time, available, isSelected, onTimeSelect }) {
  const handleClick = React.useCallback(() => {
    if (available) {
      onTimeSelect();
    }
  }, [available, onTimeSelect]);

  return (
    <li className={styles.timeslot}>
      <button
        className={isSelected ? styles.selected : ''}
        onClick={handleClick}
        disabled={!available}
      >
        {formattedTime(time)}
      </button>
    </li>
  );
}
