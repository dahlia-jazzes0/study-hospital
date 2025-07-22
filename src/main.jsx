import { AppView } from '@/app/app-view.jsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router';
import { AuthProvider } from './shared/auth/auth-provider';

import '@/shared/styles/reset.css';

import '@/shared/styles/base.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <HashRouter>
        <AppView />
      </HashRouter>
    </AuthProvider>
  </StrictMode>
);
