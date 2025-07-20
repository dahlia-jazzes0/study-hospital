import styles from './department-circular-progress-bar.module.css';

export function DepartmentCircularProgressBar({
  ref,
  value = 0,
  color = 'cyan',
  bgColor = 'currentColor',
  size = '340px',
  thickness = 0.1,
  label,
}) {
  return (
    <div
      ref={ref}
      className={styles.container}
      style={{
        '---percent': `${value}%`,
        '---color': color,
        '---bg': bgColor,
        '---size': size,
        '---thickness': `calc(${size} * ${thickness})`,
      }}
    >
      <div className={styles.donut}></div>
      <div className={styles.content}>
        {label && <p className={styles.label}>{label}</p>}
        <p className={styles.percent}>{value.toFixed(1)}%</p>
      </div>
    </div>
  );
}
