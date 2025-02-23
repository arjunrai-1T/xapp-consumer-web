import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import SignInCard from './SignInCard.tsx';
import Content from './Content.tsx';
import Box from '@mui/material/Box/Box';
// import AppTheme from '../shared-theme/AppTheme';
// import ColorModeSelect from '../shared-theme/ColorModeSelect';

export default function SignInSide(props: { disableCustomTheme?: boolean }) {
  return (
    // <AppTheme {...props}>
    //   <CssBaseline enableColorScheme />
    //   <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
      <Stack
        direction="column"
        component="main"
        sx={[
          {
            justifyContent: 'flex-start',
            alignItems: 'space-evenly',
            height: 'calc((1 - var(--template-frame-height, 0)) * 100%)',
            marginTop: 'max(40px - var(--template-frame-height, 0px), 0px)',
            minHeight: '100%',
          },
          (theme) => ({
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              zIndex: -1,
              inset: 0,
              //  backgroundImage:
              //   'radial-gradient(ellipse at 50% 50%, hsl(235, 100.00%, 50.00%), hsl(235, 100.00%, 50.00%))',
              backgroundImage: 'linear-gradient(45deg, #FF3D00 0%, #FF3D00 25%, #FFC107 25%, #FFC107 50%, #4CAF50 50%, #4CAF50 75%, #FF5722 75%, #FF5722 100%)',
              backgroundRepeat: 'no-repeat',
              ...theme.applyStyles('dark', {
                backgroundImage:
                  'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
              }),
            },
          }),
        ]}
      >
        {/* <Stack
          direction={{ xs: 'column-reverse', md: 'row' }}
          sx={{
            justifyContent: 'space-evenly',
            gap: { xs: 6, sm: 12 },
            p: 2,
            m: 0
          }}
        > */}

          <Stack
            direction={{ xs: 'column-reverse', md: 'row' }}
            sx={{
              justifyContent: 'space-around',
              gap: { xs: 6, sm: 12 },
              p: { xs: 2, sm: 4 },
              m: 0,
            }}
          >
            <Content />
            <SignInCard />
          </Stack>

{/* 
         </Stack> */}
       </Stack>
    // </AppTheme>
  );
}
