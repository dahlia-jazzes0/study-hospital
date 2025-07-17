import styles from './appointment-page.module.css';

export function TimeTable({ time, available, isSelected, onTimeSelect }) {
  const handleClick = () => {
    if (available) {
      onTimeSelect();
    }
  };

  const getButtonClass = () => {
    if (isSelected) return styles.selected;
    if (available) return styles.available;
    return styles.unavailable;
  };

  const formatTime = (time) => {
    const hours = time.substring(0, 2);
    const hour = parseInt(hours);

    if (hour >= 12) {
      return `오후 ${time}`;
    } else {
      return `오전 ${time}`;
    }
  };

  return (
    <li>
      <button
        className={getButtonClass()}
        onClick={handleClick}
        disabled={!available}
      >
        {formatTime(time)}
      </button>
    </li>
  );
}
