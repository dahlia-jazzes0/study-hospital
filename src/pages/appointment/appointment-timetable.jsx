import styles from './appointment-page.module.css';

export function TimeTable({ time, available, onTimeSelect }) {
  const handleClick = () => {
    if (available && onTimeSelect) {
      onTimeSelect(time);
    }
  };

  return (
    <li>
      <button
        className={available ? styles.available : styles.unavailable}
        onClick={handleClick}
        disabled={!available}
      >
        {time}
      </button>
    </li>
  );
}
