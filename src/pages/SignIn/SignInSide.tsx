import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import SignInCard from './SignInCard.tsx';
import Content from './Content.tsx';
import Box from '@mui/material/Box/Box';
// import AppTheme from '../shared-theme/AppTheme';
// import ColorModeSelect from '../shared-theme/ColorModeSelect';
import flikTapeImage from "../../assets/images/FlikTape.webp";
import flikTapeVHSImage from "../../assets/images/VHS.webp";

const FlikTapeIcon = ({ width = '90%', height = '100%' }) => {
  return (
    <Box
      component="img"
      src={flikTapeImage} // Ensure the image is inside the public folder
      alt="FlikTape"
      sx={{
        width: width,
        height: height,
        objectFit: "cover",
        borderRadius: "8px",
        boxShadow: 0,
      }}
    />
  );
};

const FlikTapeVHSIcon = ({ width = '90%', height = '100%' }) => {
  return (
    <Box
      component="img"
      src={flikTapeVHSImage} // Ensure the image is inside the public folder
      alt="FlikTape"
      sx={{
        width: width,
        height: height,
        objectFit: "cover",
        borderRadius: "8px",
        boxShadow: 0,
      }}
    />
  );
};

export default function SignInSide(props: { disableCustomTheme?: boolean }) {
  return (
        <Box
            sx={{
              height: '100vh', // Full screen height
              width: '100vw', // Full screen width
              p: { xs: 2, sm: 4, md: 1 }, // Padding applied to the wrapper
              boxSizing: 'border-box', // Ensures padding doesn't affect width
              overflow: 'hidden',
              backgroundColor: 'hsl(0, 0%, 0%)',
              backgroundRepeat: 'no-repeat',
              //backgroundImage: 'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))'
            }}
          >
            <Stack
              direction={{ xs: 'column-reverse', md: 'row' }}
              component="main"
              sx={{
                justifyContent: 'flex-start',
                gap: { xs: 6, sm: 12,md:1 },
                p: { xs: 2, sm: 4, md: 0 },
                m: 0,
                height: '100%', // Full screen height
                width: '100%', // Full screen width
              }}
            >
                <Box sx={{ flex: { xs: 1, md: 8 }, display: 'flex', justifyContent: 'flex-start', alignItems: 'stretch', width: '100vw',padding:2,overflow: 'hidden' }}>
                  <FlikTapeIcon />
                  {/* <FlikTapeVHSIcon/> */}
                </Box>
                <Box sx={{ flex: { xs: 1, md: 4 }, display: 'flex', justifyContent: 'flex-start', alignItems: 'stretch',width: '100vw' }}>
                  <SignInCard />
                </Box>
            </Stack>
        </Box>
  );
}
