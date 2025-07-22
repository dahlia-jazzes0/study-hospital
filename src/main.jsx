import { AppView } from '@/app/app-view.jsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router';

import '@/shared/styles/reset.css';

import '@/shared/styles/base.css';

import '@/shared/styles/utils.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <AppView />
    </HashRouter>
  </StrictMode>
);
