import { Outlet } from 'react-router';
import { HeaderView } from '@/shared/ui/header-view.jsx';

export function Layout() {
  return (
    <>
      <HeaderView />
      <main>
        <Outlet />
      </main>
    </>
  );
}
