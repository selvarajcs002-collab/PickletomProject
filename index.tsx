
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const init = () => {
  const rootElement = document.getElementById('root');
  if (!rootElement) return;

  // Render the application
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  // Smoothly remove fallback loader once React starts rendering
  // We use a small timeout to ensure the browser has painted the initial React frame
  setTimeout(() => {
    const fallback = document.getElementById('fallback-loader');
    if (fallback) {
      fallback.classList.add('fade-exit');
      setTimeout(() => fallback.remove(), 500);
    }
  }, 100);
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
