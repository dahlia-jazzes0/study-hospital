import { Routes, Route } from 'react-router';
import { Layout } from './layout.jsx';
import { HomePage } from '@/pages/home-page.jsx';
import { AboutPage } from '@/pages/about-page.jsx';
import { LoginPage } from '@/pages/login-page.jsx';

export function AppView() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}
