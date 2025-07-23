import { useDepartmentId } from '../_hooks/use-department-id';
import { DepartmentCrossfadeImage } from './department-crossfade-image';
import styles from './department-banner.module.css';

export function DepartmentBanner() {
  const departmentId = useDepartmentId();
  const src = `images/departments/banner/${departmentId}.jpg`;

  return <DepartmentCrossfadeImage className={styles.image} src={src} alt="" />;
}
