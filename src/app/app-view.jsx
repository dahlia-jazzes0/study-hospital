import { Routes, Route } from 'react-router';
import { Layout } from './layout.jsx';
import { HomePage } from '@/pages/home-page.jsx';
import { AboutPage } from '@/pages/about-page.jsx';
import { ReviewPage } from '@/pages/review/review-page';
import { ReviewDetailPage } from '@/pages/review/review-detail';
import { DoctorsPage } from '@/pages/doctors/doctors-page.jsx';
import { LoginPage } from '@/pages/login/login-page.jsx';
import { JoinPage } from '@/pages/join/join-page.jsx';
import { AppointmentPage } from '@/pages/appointment/appointment-page.jsx';
import { ReviewLayout } from '@/pages/review/review-layout.js';
import { DepartmentsLayout } from '@/pages/departments/departments-layout.jsx';
import { DepartmentInternalPage } from '@/pages/departments/internal/department-internal-page.jsx';
import { DepartmentOrthopedicPage } from '@/pages/departments/orthopedic/department-orthopedic-page.jsx';
import { DepartmentGynecologyPage } from '@/pages/departments/gynecology/department-gynecology-page.jsx';
import { DepartmentPediatricsPage } from '@/pages/departments/pediatrics/department-pediatrics-page.jsx';
import { DepartmentBariatricPage } from '@/pages/departments/bariatric/department-bariatric-page.jsx';
import { useDepartments } from '@/pages/departments/_hooks/use-departments.js';

export function AppView() {
  useDepartments(); // preload
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="reviews" element={<ReviewLayout />}>
          <Route index element={<ReviewPage />} />
          <Route path=":id" element={<ReviewDetailPage />} />
        </Route>
        <Route path="doctors" element={<DoctorsPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="join" element={<JoinPage />} />
        <Route path="appointment" element={<AppointmentPage />} />
        <Route path="departments" element={<DepartmentsLayout />}>
          <Route index element={<DepartmentInternalPage />} />
          <Route path="internal" element={<DepartmentInternalPage />} />
          <Route path="orthopedic" element={<DepartmentOrthopedicPage />} />
          <Route path="gynecology" element={<DepartmentGynecologyPage />} />
          <Route path="pediatrics" element={<DepartmentPediatricsPage />} />
          <Route path="bariatric" element={<DepartmentBariatricPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
