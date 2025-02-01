import React from 'react';
import { Box, CssBaseline, Typography } from '@mui/material';
import Feed from '../components/Feed/Feed.tsx';
import Header from '../components/Header/Header.tsx';
import AppBarWithSearch from '../components/AppBar/AppBarWithSearch.tsx';
import AppDrawer from '../components/AppDrawer/AppDrawer.tsx';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';


const Home: React.FC = () => {

        const drawerWidth = 240;

        const [open, setOpen] = React.useState(false);
        
        const handleDrawerOpen = () => {
          setOpen(true);
        };

        const handleDrawerClose = () => {
          setOpen(false);
        };

        const DrawerHeader = styled('div')(({ theme }) => ({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          padding: theme.spacing(0, 1),
          // necessary for content to be below app bar
          ...theme.mixins.toolbar,
        }))

        return (
          <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBarWithSearch open={open} drawerWidth={drawerWidth} handleDrawerOpen={handleDrawerOpen}/>
            <AppDrawer open={open} drawerWidth={drawerWidth} handleDrawerClose={handleDrawerClose} handleDrawerOpen={handleDrawerOpen}/>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <DrawerHeader />
              <Typography sx={{ marginBottom: 2 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                sapien faucibus et molestie ac.
              </Typography>
              <Typography sx={{ marginBottom: 2 }}>
                Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
                sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
                tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                posuere sollicitudin aliquam ultrices sagittis orci a.
              </Typography>
            </Box>
          </Box>
        );

};

export default Home;