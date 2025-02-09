import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App.tsx';
import ErrorBoundary from './ErrorBoundary.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import DashboardHome from './pages/Home/NewHomePage.tsx';
import VideoList from './components/VideoCard/VideoList.tsx';
import VideoViewPage from './pages/VideoSoloView/VideoViewPage.tsx';

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
