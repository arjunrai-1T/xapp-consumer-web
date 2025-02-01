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
import { Avatar, Collapse, ListItemAvatar } from '@mui/material';
import green from '@mui/material/colors/green';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HomeIcon from '@mui/icons-material/Home';
import SixtyFpsSelectIcon from '@mui/icons-material/SixtyFpsSelect';
import { blue, cyan, red } from '@mui/material/colors';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import {
    Person as PersonIcon,
    Work as WorkIcon,
    Mail as MailIcon,
    Delete as DeleteIcon,
    StarBorder,
    ExpandLess,
    ExpandMore,
  } from '@mui/icons-material';


interface AppDrawerProps  {
    open: boolean;
    drawerWidth: number;
    handleDrawerOpen: () => void;
    handleDrawerClose: () => void;
}; 
  
const AppDrawer=(props:AppDrawerProps)=> {

        const [openSubscription, setOpenSubscription] = React.useState(false);

        const handleSubscriptionClick = () => {
            setOpenSubscription(!openSubscription);
        };
    
        const theme = useTheme();

        const drawerWidth = props.drawerWidth;

        const openedMixin = (theme: Theme): CSSObject => ({
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: 'hidden',
        });
        
        const closedMixin = (theme: Theme): CSSObject => ({
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: `calc(${theme.spacing(7)} + 1px)`,
        [theme.breakpoints.up('sm')]: {
            width: `calc(${theme.spacing(8)} + 1px)`,
        },
        });

        const DrawerHeader = styled('div')(({ theme }) => ({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
        }));
        
        const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
        ({ theme }) => ({
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
            boxSizing: 'border-box',
            variants: [
            {
                props: ({ open }) => open,
                style: {
                ...openedMixin(theme),
                '& .MuiDrawer-paper': openedMixin(theme),
                },
            },
            {
                props: ({ open }) => !open,
                style: {
                ...closedMixin(theme),
                '& .MuiDrawer-paper': closedMixin(theme),
                },
            },
            ],
        }),
        );

        const getFirstLevelMenu=(menuname: string)=>{
            if(0==menuname.localeCompare("Home")){
                return ( 
                <Avatar sx={{ bgcolor: green[500],width: 25, height: 25 }} variant="rounded" >
                    <HomeIcon />
                </Avatar>);
            } else if(0==menuname.localeCompare("Shorts")){
                return ( 
                <Avatar sx={{ bgcolor: blue[500],width: 25, height: 25 }} variant="rounded" >
                    <SixtyFpsSelectIcon />
                </Avatar>);
            }
        }

        const getSubscriptionListIcon=()=>{
            return ( 
                <Avatar sx={{ bgcolor: green[500],width: 25, height: 25 }} variant="rounded" >
                    <SubscriptionsIcon />
                </Avatar>);
        }

        const getSubscriptionList=()=> {
            return (
              <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: red[500],width: 25, height: 25 }} variant="rounded">
                        <SubscriptionsIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Photos" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: green[500],width: 25, height: 25 }} variant="rounded">
                      <WorkIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Work" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: cyan[500],width: 25, height: 25 }} variant="rounded">
                        <SubscriptionsIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Vacation"/>
                </ListItem>
              </List>);
        }
        {/*<Drawer variant="permanent" open={props.open}>*/}
        return(
            <Drawer
            open={props.open}
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
          >
                <DrawerHeader>
                    <IconButton onClick={props.handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />

                <List>
                    {['Home', 'Shorts'].map((text, index) => (
                        <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={[
                            {
                                minHeight: 48,
                                px: 2.5,
                            },
                            props.open
                                ? {
                                    justifyContent: 'initial',
                                }
                                : {
                                    justifyContent: 'center',
                                },
                            ]}
                        >
                            <ListItemIcon
                            sx={[
                                {
                                minWidth: 0,
                                justifyContent: 'center',
                                },
                                props.open
                                ? {
                                    mr: 3,
                                    }
                                : {
                                    mr: 'auto',
                                    },
                            ]}
                            >
                            {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                            {/* <Avatar sx={{ bgcolor: green[500],width: 30, height: 30 }} variant="rounded" >
                                <HomeIcon />
                            </Avatar> */}
                            {getFirstLevelMenu(text)}
                            </ListItemIcon>
                            <ListItemText
                            primary={text}
                            sx={[
                                props.open
                                ? {
                                    opacity: 1,
                                    }
                                : {
                                    opacity: 0,
                                    },
                            ]}
                            />
                        </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />

                <List>
                    {['Subscriptions'].map((text, index) => (
                        <ListItem key={text} disablePadding sx={{ display: 'block' }} onClick={handleSubscriptionClick}>
                            <ListItemButton
                                sx={[
                                {
                                    minHeight: 48,
                                    px: 2.5,
                                },
                                props.open
                                    ? {
                                        justifyContent: 'initial',
                                    }
                                    : {
                                        justifyContent: 'center',
                                    },
                                ]}
                            >
                                <ListItemIcon
                                sx={[
                                    {
                                    minWidth: 0,
                                    justifyContent: 'center',
                                    },
                                    props.open
                                    ? {
                                        mr: 3,
                                        }
                                    : {
                                        mr: 'auto',
                                        },
                                ]}
                                >
                                {/*index % 2 === 0 ? <InboxIcon /> : <MailIcon />*/}
                                </ListItemIcon> 
                                <ListItemText
                                    primary={text}
                                    sx={[
                                        props.open
                                        ? {
                                            opacity: 1,
                                            }
                                        : {
                                            opacity: 0,
                                            },
                                    ]}
                                >
                                </ListItemText>
                                {openSubscription ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                        </ListItem>
                    ))}
                    <Collapse in={openSubscription} timeout="auto" unmountOnExit>
                        {getSubscriptionList()}
                    </Collapse>
                </List>
                <Divider />

            </Drawer>
        );

}

export default AppDrawer;