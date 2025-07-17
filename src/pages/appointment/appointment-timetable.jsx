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

  return (
    <li>
      <button
        className={getButtonClass()}
        onClick={handleClick}
        disabled={!available}
      >
        {time}
      </button>
    </li>
  );
}
