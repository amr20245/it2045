import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// React 18 uses createRoot instead of the old ReactDOM.render. We wrap
// the App component with BrowserRouter to enable client‑side routing.
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
