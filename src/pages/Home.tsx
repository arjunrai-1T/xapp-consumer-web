import React from 'react';
import { Box } from '@mui/material';
import Header from '../components/Header/Header.tsx';
import Sidebar from '../components/Sidebar/Sidebar.tsx';
import Feed from '../components/Feed/Feed.tsx';

const Home: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <Sidebar />
        <Feed />
      </Box>
    </Box>
  );
};

export default Home;