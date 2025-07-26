import styles from './department-case-card.module.css';

/**
 * @typedef {object} DepartmentCaseCardGridProps
 * @prop {(DepartmentCaseCardProps & { id: number })[]} items
 * @prop {"lg"} [size]
 */

/**
 * @param {DepartmentCaseCardGridProps} props
 */
export function DepartmentCaseCardGrid({ items, size }) {
  return (
    <ul className={styles.cards} data-size={size}>
      {items.map((item) => (
        <DepartmentCaseCard
          key={item.id}
          thumbnail={item.thumbnail}
          title={item.title}
          description={item.description}
        />
      ))}
    </ul>
  );
}

/**
 * @typedef {object} DepartmentCaseCardProps
 * @prop {string} thumbnail
 * @prop {string} title
 * @prop {string} description
 */

/**
 * @param {DepartmentCaseCardProps} props
 */
function DepartmentCaseCard({ thumbnail, title, description }) {
  return (
    <li className={styles.card}>
      <img
        className={styles.cardThumbnail}
        src={thumbnail}
        alt=""
        loading="lazy"
      />
      <div className={styles.cardContent}>
        <h4 className={styles.cardTitle}>{title}</h4>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </li>
  );
}
