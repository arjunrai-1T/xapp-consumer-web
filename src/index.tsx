import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import VideoList from './components/VideoCard/VideoList.tsx';
import VideoViewPage from './pages/VideoSoloView/VideoViewPage.tsx';
import ErrorBoundary from './error/ErrorBoundary.tsx';
import "@fontsource/ubuntu";

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
