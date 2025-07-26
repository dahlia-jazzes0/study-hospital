import { SquareCheckBigIcon } from 'lucide-react';
import styles from './department-check-list.module.css';

/**
 * @typedef {object} DepartmentCheckListProps
 * @prop {{ id: number, content:import('react').ReactNode }[]} items
 */

/**
 *
 * @param {DepartmentCheckListProps} props
 */
export function DepartmentCheckList({ items }) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <ItemView key={item.id}>{item.content}</ItemView>
      ))}
    </ul>
  );
}

function ItemView({ children }) {
  return (
    <li className={styles.item}>
      <SquareCheckBigIcon
        size={40}
        strokeWidth={3}
        color="var(---main-color)"
      />
      {children}
    </li>
  );
}
