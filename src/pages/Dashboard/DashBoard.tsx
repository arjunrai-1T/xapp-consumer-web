import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import VideoCard from '../../components/VideoCard/VideoCard.tsx';
import { Video } from '../../types/video.ts';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer.tsx';
import VideoList from '../../components/VideoCard/VideoList.tsx';
import VideoViewPage from '../VideoSoloView/VideoViewPage.tsx';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { blue, red, yellow } from '@mui/material/colors';
import { HomePageProps } from '../types/props.ts';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import SignIn from '../Signin/SignIn.tsx';
import SignInSide from '../sign-in-side/SignInSide.tsx';
import ChannelView from '../ChannelView/ChannelView.tsx';

const drawerWidth = 200; // Expanded drawer width
const miniDrawerWidth = 60; // Collapsed drawer width

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  width: miniDrawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  position: 'fixed',
  width: '100%',
  backgroundColor: '#ffffff', 
  color: '#000000',
  boxShadow: 'none',
  borderBottom: `0.5px solid ${theme.palette.grey[300]}`,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })( 
  ({ theme, open }) => ({
    width: open ? drawerWidth : miniDrawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    '& .MuiDrawer-paper': open ? openedMixin(theme) : closedMixin(theme),
  })
);

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[200],
  '&:hover': {
    backgroundColor: theme.palette.grey[300],
  },
  width: '40%',
  maxWidth: '500px',
  marginLeft: 'auto',
  marginRight: 'auto'
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '100%',
  },
}));

const Dashboard=({path}:HomePageProps)=> {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setOpen(!open); // Toggle drawer state
  };

  // Function to handle clicks
  const handleClickDrawerIcon = (menuname: string) => {
    console.log(`You clicked on ${menuname}`);
    switch (menuname) {
      case 'DashBoard':
          navigate('/'); 
          break;
      case 'Video List':
          navigate('/videolist'); 
          break;
      case 'Video Solo':
          navigate('/videoview'); 
          break;
      case 'Channel':
          navigate('/channelview'); 
          break;
      default:
        return; 
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      {/* AppBar */}
      <AppBar position="fixed">
        <Toolbar>
          {/* Toggle Button (single button for both icons) */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
            sx={{ marginRight: 5 }}
          >
            {open ? <ChevronLeftIcon /> : <MenuIcon />} {/* Toggle between Menu and Chevron icons */}
          </IconButton>
         
          {/* App Title */}
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            xapp
          </Typography>

          {/* Centered Search Bar (like YouTube) */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          {/* Right-side Icons */}
          <Box sx={{ flexGrow: 1 }} />
          <IconButton size="large" aria-label="show notifications" color="inherit">
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Profile Menu Dropdown positioned under the AccountCircle Icon */}
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom', // Open menu below the icon
          horizontal: 'right', // Align it to the right
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
      </Menu>

      {/* Mini variant Drawer */}
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['DashBoard', 'Video List', 'Video Solo', 'Channel','Signin'].map((text) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton sx={{ minHeight: 48, px: 2.5, justifyContent: open ? 'initial' : 'center' }} onClick={() => handleClickDrawerIcon(text)}>
                <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center', mr: open ? 3 : 'auto' }}>
                  {(() => {
                    switch (text) {
                      case 'DashBoard':
                        return <DashboardIcon sx={{ color: blue[500] }}/>; 
                      case 'Video List':
                        return <VideoLibraryIcon sx={{ color: red[500] }}/>; 
                      case 'Video Solo':
                          return <OndemandVideoIcon  sx={{ color: yellow[500] }}/>; 
                      case 'Channel':
                            return <VideoCameraFrontIcon  sx={{ color: blue[500] }}/>; 
                      case 'Signin':
                              return <LoginIcon  sx={{ color: blue[500] }}/>; 
                      default:
                       break;
                    }
                  })()}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 1.5, marginTop: '0px',alignContent: "center" }}>
        <DrawerHeader />
        {(() => {
        console.log(`We get ${path}`)
        switch (path) {
          case '/videolist':
            return <VideoList drawerOpenStatus={open} isVerticalList={false} />; // Render VideoList for "/videolist" route
          case '/videoview':
            return <VideoViewPage drawerOpenStatus={open} video={""}  />; // Render VideoViewPage for "/videoview" route
          case '/channelview':
              return <ChannelView channelid={"test"}/>; 
          default:
            return <Box>Welcome to the Dashboard</Box>; // Default view (could be the Dashboard or any fallback)
        }
      })()}
      </Box>
    </Box>
  );
}

export default Dashboard;