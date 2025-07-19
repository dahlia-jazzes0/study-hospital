import { Routes, Route } from 'react-router';
import { Layout } from './layout.jsx';
import { HomePage } from '@/pages/home-page.jsx';
import { AboutPage } from '@/pages/about-page.jsx';
import { DoctorsPage } from '@/pages/doctors/doctors-page.jsx';
import { LoginPage } from '@/pages/login-page.jsx';

import { JoinPage } from '@/pages/join-page.jsx';
import { AppointmentPage } from '@/pages/appointment/appointment-page.jsx';

export function AppView() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="doctors" element={<DoctorsPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="join" element={<JoinPage />} />
        <Route path="appointment" element={<AppointmentPage />} />
      </Route>
    </Routes>
  );
}
