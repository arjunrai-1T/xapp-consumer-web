import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, BrowserRouter, Navigate } from 'react-router-dom';
import './App.css';
import VideoList from '../components/VideoCard/VideoList.tsx';
import VideoViewPage from '../pages/VideoSoloView/VideoViewPage.tsx';
import { Box, Button, CssBaseline, ThemeProvider } from '@mui/material';
import HomePage from '../pages/Home/HomePage.tsx';
import theme from '../theme/theme.ts';
import SignInSide from '../pages/SignIn/SignInSide.tsx';
import SignUp from '../pages/SignUp/SignUp.tsx';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Ensures consistent global styles */}
      <BrowserRouter>
        <Routes>
          {/* Define the routes for the home page and video list/page */}
          <Route
            path="/"
            element={isLoggedIn ? <HomePage path="/" /> : <Navigate to="/signin" />}
          />
          <Route
            path="/videolist"
            element={isLoggedIn ? <HomePage path="/videolist" /> : <Navigate to="/signin" />}
          />
          <Route
            path="/videoview"
            element={isLoggedIn ? <HomePage path="/videoview" /> : <Navigate to="/signin" />}
          />
          <Route
            path="/channelview"
            element={isLoggedIn ? <HomePage path="/channelview" /> : <Navigate to="/signin" />}
          />
          <Route
            path="/signin"
            element={ <SignInSide disableCustomTheme={false} /> }
          />
          <Route
            path="/signup"
            element={ <SignUp disableCustomTheme={false} /> }
          />
          
          {/* SignIn route for non-logged-in users */}
          {/* <Route
            path="/signin"
            element={<SignInPage setIsLoggedIn={setIsLoggedIn} />}
          /> */}
          {/* <Route
            path="/signup"
            element={<SignUpPage setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route
            path="/forgotpassword"
            element={<ForgotPasswordPage />}
          /> */}
          
          {/* Catch-all route */}
          <Route
            path="*"
            element={isLoggedIn ? <HomePage path="*" /> : <Navigate to="/signin" />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
