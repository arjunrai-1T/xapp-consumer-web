import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, BrowserRouter } from 'react-router-dom';
import './App.css';
import DashboardHome from '../pages/Home/NewHomePage.tsx';
import VideoList from '../components/VideoCard/VideoList.tsx';
import VideoViewPage from '../pages/VideoSoloView/VideoViewPage.tsx';
import { Box, Button } from '@mui/material';

const App: React.FC = () => {
  
  return (
       <BrowserRouter>
         <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/videolist" element={<DashboardHome />} />
            <Route path="/videoview" element={<DashboardHome />} />
          </Routes>
       </BrowserRouter>
  );
};

export default App;
