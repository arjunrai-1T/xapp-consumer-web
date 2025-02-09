import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import DashboardHome from '../pages/Home/NewHomePage.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardHome />} />
      </Routes>
    </Router>
  );
};

export default App;
