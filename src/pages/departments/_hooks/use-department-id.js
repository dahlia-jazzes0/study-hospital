import { useLocation } from 'react-router';
import { useDepartments } from './use-departments';

const DEPARTMENT_ID_PART = /(?<=\/departments\/).+?(?=\/|$)/;
export function useDepartmentId() {
  const departments = useDepartments();
  const location = useLocation();
  const departmentId =
    location.pathname.match(DEPARTMENT_ID_PART)?.[0] ?? departments.at(0)?.id;

  if (!departments.some((department) => department.id === departmentId)) {
    return null;
  }
  return departmentId;
}
