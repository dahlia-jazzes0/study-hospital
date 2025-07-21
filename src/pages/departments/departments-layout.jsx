import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { useDepartmentId } from './_hooks/use-department-id';
import { DepartmentBanner } from './_ui/department-banner';
import { DepartmentNav } from './_ui/department-nav';
import './department-utils.module.css';
import styles from './departments-layout.module.css';

export function DepartmentsLayout() {
  return (
    <div className={styles.container}>
      <Suspense fallback={<FallbackView />}>
        <DepartmentsView />
      </Suspense>
    </div>
  );
}

function DepartmentsView() {
  const departmentId = useDepartmentId();

  if (departmentId == null) return <NotFoundView />;

  return (
    <>
      <DepartmentBanner />
      <DepartmentNav />
      <Outlet />
    </>
  );
}

function NotFoundView() {
  return 'Not Found';
}

function FallbackView() {
  return 'loading';
}
