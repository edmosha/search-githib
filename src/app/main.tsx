import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import '@/shared/assets/fonts/noto-sans-webfont/style.css';

import App from './app.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
