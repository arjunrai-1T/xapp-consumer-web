import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App.tsx';
import ErrorBoundary from './ErrorBoundary.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <ErrorBoundary>
        <App/>
      </ErrorBoundary>
  </React.StrictMode>
);
