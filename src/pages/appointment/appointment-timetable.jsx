import styles from './appointment-page.module.css';
import { formattedTime } from './util';

export function TimeTable({ time, available, isSelected, onTimeSelect }) {
  const handleClick = () => {
    if (available) {
      onTimeSelect();
    }
  };

  return (
    <li>
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
