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
              backgroundImage: 'linear-gradient(45deg, rgba(255, 61, 0, 0.7) 0%, rgba(255, 61, 0, 0.7) 25%, rgba(255, 193, 7, 0.7) 25%, rgba(255, 193, 7, 0.7) 50%, rgba(76, 175, 80, 0.7) 50%, rgba(76, 175, 80, 0.7) 75%, rgba(255, 87, 34, 0.7) 75%, rgba(255, 87, 34, 0.7) 100%)',
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
