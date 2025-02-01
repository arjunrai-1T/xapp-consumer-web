import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home.tsx';
import './App.css';
import DashboardLayoutBasic from '../pages/DashBoardHome.tsx';
import HomePage from '../pages/NewHomePage.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
