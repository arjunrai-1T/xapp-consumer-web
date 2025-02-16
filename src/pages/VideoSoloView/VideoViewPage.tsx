import React, { useState } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  List,
  ListItem,
  Grid2,
  Box,
  Paper,
  Avatar,
  Button,
  Divider,
  CardHeader,
  IconButton,
  IconButtonProps
} from "@mui/material";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer.tsx";
import { wrap } from "module";
import AppleIcon from '@mui/icons-material/Apple';
import { green } from "@mui/material/colors";
import Grid from '@mui/material/Grid2';
import { experimentalStyled as styled } from '@mui/material/styles';

import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VideoList from "../../components/VideoCard/VideoList.tsx";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }));

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}
  
const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    variants: [
      {
        props: ({ expand }) => !expand,
        style: {
          transform: 'rotate(0deg)',
        },
      },
      {
        props: ({ expand }) => !!expand,
        style: {
          transform: 'rotate(180deg)',
        },
      },
    ],
}));

// const LeftRightLayout = () => {
//     const [isFullWidth, setIsFullWidth] = useState(false);
  
//     // Toggle the state between full width and half width for the left side grid
//     const handleToggleLayout = () => {
//       setIsFullWidth(prev => !prev);
//     };
  
//     return (
//       <Box
//         sx={{
//           display: 'grid',
//           gridTemplateColumns: { 
//             xs: '1fr', // Stack on small screens
//             md: isFullWidth ? '1fr 0.5fr' : '2fr 1fr' // If full width, left side takes all space; otherwise 50% width each
//           },
//           gridTemplateRows: 'auto 1fr', // Ensures the second section takes the remaining space
//           gridGap: '16px',
//           height: '100vh',
//           padding: 2,
//         }}
//       >
//         {/* Left Box (Card Container) */}
//         <Box
//           sx={{
//             gridColumn: { xs: 'span 2', md: isFullWidth ? 'span 2' : '1' }, // When expanded, it spans across both columns
//             backgroundColor: 'lightblue',
//             padding: 2,
//           }}
//         >
//             <Card sx={{ width: '100%' }}>
//               <CardContent>
//                 <Typography variant="h5" gutterBottom>
//                   Left Box - Card Container
//                 </Typography>
//                 <Typography variant="body1">
//                   This is a card inside the left grid. It spans across the full width of the grid in small screens.
//                 </Typography>
//               </CardContent>
//             </Card>
//             {/* Button to toggle layout on the left side */}
//             <Box
//               sx={{
//                 gridColumn: 'span 2', // Make the button span across both columns on mobile
//                 display: 'flex',
//                 justifyContent: 'flex-start', // Align the button to the left
//                 padding: 2,
//               }}
//             >
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={handleToggleLayout}
//                 sx={{ width: '200px' }}
//               >
//                 {isFullWidth ? 'Shrink Left Side' : 'Expand Left Side'}
//               </Button>
//             </Box>
//         </Box>
  
//         {/* Right Box (Below the Card Container) */}
//         <Box
//           sx={{
//             backgroundColor: 'lightgreen',
//             padding: 2,
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             gridColumn: { xs: 'span 2', md: '2' }, // Always stay on the right side even when left side is full-width
//           }}
//         >
//           <Typography variant="h4">Right Box</Typography>
//         </Box>

//       </Box>
//     );
// };
  
const LeftRightLayout = () => {
  const [isFullWidth, setIsFullWidth] = useState(false);

  // Toggle the state between full width and half width for the left side grid
  const handleToggleLayout = () => {
    setIsFullWidth(prev => !prev);
  };

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr', // Stack on small screens
          md: isFullWidth ? '1fr 0.5fr' : '2fr 1fr', // Left side takes full width if expanded, otherwise split half and half
        },
        gridTemplateRows: 'auto 1fr', // Two rows: First row for left-right boxes, second row for the third box when left expands
        gridGap: '16px',
        height: '100vh',
        padding: 2,
      }}
    >
      {/* Left Box (Card Container) */}
      <Box
        sx={{
          gridColumn: { xs: 'span 2', md: isFullWidth ? 'span 2' : '1' }, // Span 2 columns when full width
          backgroundColor: 'lightblue',
          padding: 2,
        }}
      >
        <Card sx={{ width: '100%' }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Left Box - Card Container
            </Typography>
            <Typography variant="body1">
              This is a card inside the left grid. It spans across the full width of the grid in small screens.
            </Typography>
          </CardContent>
        </Card>

        {/* Button to toggle layout on the left side */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start', // Align the button to the left
            padding: 2,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={handleToggleLayout}
            sx={{ width: '200px' }}
          >
            {isFullWidth ? 'Shrink Left Side' : 'Expand Left Side'}
          </Button>
        </Box>
      </Box>

      {/* Right Box (Aligned in first row) */}
      <Box
        sx={{
          backgroundColor: 'lightgreen',
          padding: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gridColumn: { xs: 'span 2', md: isFullWidth ? '2' : '2'  }, // Right box stays in the second column when on medium and large screens
        }}
      >
        <Typography variant="h4">Right Box</Typography>
      </Box>

      {/* Third Box (Second row) */}
      <Box
        sx={{
          backgroundColor: 'lightcoral',
          padding: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gridColumn: { xs: 'span 2', md: isFullWidth ? '1' : '1' }, // Ensure third box spans across both columns when expanded
        }}
      >
        <Typography variant="h4">Third Box</Typography>
      </Box>
    </Box>
  );
};

const VideoViewPage =({ drawerOpenStatus,video })=>{

    const [isFullScreen,setIsFullScreen] = React.useState(false);

    const onClickFullScreenButton =()=>{
      setIsFullScreen(true);
    };

    const onClickMediumScreenButton =()=>{
      setIsFullScreen(false);
    };

    const [isFullWidth, setIsFullWidth] = useState(false);

    // Toggle the state between full width and half width for the left side grid
    const handleToggleLayout = () => {
      setIsFullWidth(prev => !prev);
    };

    return (
        <Box sx={{ flexGrow: 1,height: '100vh' }}>

          <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid container  size={{ xs: 2, sm: 4, md: 12 }} spacing={2}>
                  <Grid size={{ xs: 4, sm: 8, md: isFullWidth ? 12: 7 }} sx={{backgroundColor: isFullWidth? 'black': 'transparent',borderRadius: 2}} >
                    <VideoPlayer videoSrc={""} poster={""} isFullWidth={isFullWidth}></VideoPlayer>
                  </Grid>
                  <Grid size={{ xs: 4, sm: 4, md: isFullWidth ? 4: 5 }} sx={{display: isFullWidth ? 'none' :'block'}}  >
                    <Card sx={{ width: '100%',height: '100%' ,backgroundColor: 'lightgreen' }}>
                      <CardContent>
                        <Typography variant="h5" gutterBottom>
                          Right Box - Card Container 2
                        </Typography>
                        <Typography variant="body1">
                          This is a card inside the right grid. It spans across the full width of the grid in small screens.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
              </Grid>
          </Grid>

          <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
             <Grid size={{ xs: 2, sm: 4, md: 8 }}>
                <Card sx={{ width: '100%',height: '100%' ,backgroundColor: 'lightcoral' }}>
                      <CardContent>
                        <Typography variant="h5" gutterBottom>
                          Left Box - Card Container 1
                        </Typography>
                        <Typography variant="body1">
                          This is a card inside the left grid. It spans across the full width of the grid in small screens.
                        </Typography>
                      </CardContent>
                    </Card>
              </Grid>
              {/*Show Vertical List of Videos*/}
              <Grid size={{ xs: 2, sm: 4, md: 4 }} padding={1.5} sx={{ width: '100%',height: '100%' ,backgroundColor: '' }}>
                  <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'centre',
                          padding: 2
                        }}
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleToggleLayout}
                          sx={{ width: '200px' }}
                        >
                          {isFullWidth ? 'Shrink Left Side' : 'Expand Left Side'}
                        </Button>
                  </Box>
                  <VideoList drawerOpenStatus={drawerOpenStatus} isVerticalList={true}/>
              </Grid>
          </Grid>
          
      </Box>
    );
};

export default VideoViewPage;
//Vertical WHole Div width => 402
//Vertical Video Card Size => 402 * 98
//Vertical Video Thumbnail Size => 168 * 94
//Card Content width =>226*98