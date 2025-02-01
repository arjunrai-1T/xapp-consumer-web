import React from 'react';
import { AppBar, Toolbar, InputBase, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Header.css';

const Header: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#202020' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1, marginLeft: '20px' }}>
          YouTube
        </Typography>
        <div className="search">
          <InputBase placeholder="Search…" sx={{ color: 'white', width: '400px' }} />
          <IconButton type="submit" aria-label="search">
            <SearchIcon sx={{ color: 'white' }} />
          </IconButton>
        </div>
        <IconButton color="inherit">
          <VideoCallIcon />
        </IconButton>
        <IconButton color="inherit">
          <NotificationsIcon />
        </IconButton>
        <IconButton color="inherit">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;