import { memo } from 'react';
import { Link } from 'react-router';
import { useDepartmentId } from '../_hooks/use-department-id';
import { useDepartments } from '../_hooks/use-departments';
import utilStyles from '../department-utils.module.css';
import styles from './department-nav.module.css';

export const DepartmentNav = memo(() => {
  const departments = useDepartments();
  return (
    <div className={`${utilStyles.container} ${styles.container}`}>
      <div className={styles.content}>
        <nav className={`${styles.nav}`}>
          {departments.map((department) => (
            <DepartmentLink
              key={department.id}
              id={department.id}
              label={department.name}
            />
          ))}
        </nav>
      </div>
    </div>
  );
});

const DepartmentLink = memo(({ id, label }) => {
  const currentId = useDepartmentId();
  const active = currentId === id;
  return (
    <Link
      className={`${styles.link}${active ? ' active' : ''}`}
      to={`/departments/${id}`}
    >
      {label}
    </Link>
  );
});
