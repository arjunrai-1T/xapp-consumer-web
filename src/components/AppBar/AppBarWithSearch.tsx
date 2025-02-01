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
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


interface AppBarWithSearchrProps  {
  open: boolean;
  drawerWidth: number;
  handleDrawerOpen: () => void;
}; 

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  drawerWidth: number;
}

const AppBarWithSearch=(props:AppBarWithSearchrProps)=> {

      const theme = useTheme();

      // const AppBar = styled(MuiAppBar, {
      //   shouldForwardProp: (prop) => prop !== 'open',
      // })<AppBarProps>(({ theme }) => ({
      //   zIndex: theme.zIndex.drawer + 1,
      //   transition: theme.transitions.create(['width', 'margin'], {
      //     easing: theme.transitions.easing.sharp,
      //     duration: theme.transitions.duration.leavingScreen,
      //   }),
      //   variants: [
      //     {
      //       props: ({ open }) => open,
      //       style: {
      //         marginLeft: props.drawerWidth,
      //         width: `calc(100% - ${props.drawerWidth}px)`,
      //         transition: theme.transitions.create(['width', 'margin'], {
      //           easing: theme.transitions.easing.sharp,
      //           duration: theme.transitions.duration.enteringScreen,
      //         }),
      //       },
      //     },
      //   ],
      // }));
      const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open' && prop !== 'drawerWidth',
      })<AppBarProps>(({ theme, open, drawerWidth }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
          marginLeft: drawerWidth,
          width: `calc(100% - ${drawerWidth}px)`,
          transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }),
      }));
      
      {/*<AppBar position="fixed" open={props.open} drawerWidth={props.drawerWidth}>*/}
      return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} open={props.open} drawerWidth={props.drawerWidth}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={props.handleDrawerOpen}
              edge="start"
              sx={[
                {
                  marginRight: 5,
                },
                props.open && { display: 'none' },
              ]}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
                xapp AppBar
            </Typography>
          </Toolbar>
        </AppBar>
      );

}

export default AppBarWithSearch;
