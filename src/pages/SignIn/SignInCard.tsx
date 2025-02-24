import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MuiCard from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import ForgotPassword from './ForgotPassword.tsx';
import { GoogleIcon, FacebookIcon, SitemarkIcon, FlikTapeLogo } from './CustomIcons.tsx';
import { SvgIcon } from '@mui/material';
import flikTapeLogoImage from "../../assets/images/FliktapeLogo.webp";


const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

export default function SignInCard() {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (emailError || passwordError) {
      event.preventDefault();
      return;
    }
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const validateInputs = () => {
    const email = document.getElementById('email') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    return isValid;
  };

  return (
    <Box 
      sx={{
        width: '90%', 
        display: 'flex', 
        justifyContent: 'center' // Centers the card
      }}
    >
      <Card variant="outlined" 
      sx={{ 
        width: '100%',  // Default full width
        maxWidth: '400px', // Set max width
        padding: 3, // Padding for spacing
        gap: 1,
    }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '16vh',
            width: '100%',
          }}
        >
          <Box
            component="img"
            src={flikTapeLogoImage}
            alt="FlikTapeLogo"
            sx={{
              width: '50%',
              aspectRatio: '1 / 1', // Maintain square aspect ratio
              objectFit: 'contain', // Prevents cropping
            }}
          />
        </Box>

        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}
        >
          <FormControl>
            <TextField
              error={emailError}
              helperText={emailErrorMessage}
              id="email"
              type="email"
              name="email"
              placeholder="Email address or Phone Number"
              autoComplete="email"
              autoFocus
              required
              fullWidth
              variant="outlined"
              color={emailError ? 'error' : 'primary'}
            />
          </FormControl>
          <FormControl>
            <TextField
              error={passwordError}
              helperText={passwordErrorMessage}
              name="password"
              placeholder="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              autoFocus
              required
              fullWidth
              variant="outlined"
              color={passwordError ? 'error' : 'primary'}
            />
          </FormControl>
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <ForgotPassword open={open} handleClose={handleClose} />
          <Button type="submit" fullWidth variant="contained" onClick={validateInputs} sx={{width: '100%',height: 55,textTransform: 'none'}}>
              <Typography sx={{ textAlign: 'center' }}>Log in</Typography>
          </Button>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Link
              component="button"
              type="button"
              onClick={handleClickOpen}
              variant="body2"
              sx={{ 
                alignSelf: 'center', // Centers vertically
                textDecoration: 'none', // No underline by default
                color: 'hsl(220, 90%, 55%)', // HSL blue color
                cursor: 'pointer', // Change mouse to hand
                '&:hover': {
                  textDecoration: 'underline', // Add underline on hover
                }
              }}
            >
              Forgotten password?
            </Link>
          </Box>
          {/* <Typography sx={{ textAlign: 'center' }}>
            Forgot account?{' '}
            <span>
              <Link
                href="/material-ui/getting-started/templates/sign-in/"
                variant="body2"
                sx={{ alignSelf: 'center' }}
              >
                Sign up
              </Link>
            </span>
          </Typography> */}
        </Box>

        <Divider/>
        
        <Box sx={{ 
           display: 'flex', 
           alignItems: 'center',
           justifyContent: 'center', gap: 2 }}>
          <Button
            sx={{width: 200,height: 40,backgroundColor: 'hsl(108, 63%, 44%)', textTransform: 'none',color: 'white'}}
            fullWidth
            variant="outlined"
            onClick={() => alert('Sign in with Google')}
            // startIcon={<GoogleIcon />}
          >
            <Typography sx={{ textAlign: 'center' }}>Create new account</Typography> 
          </Button>
          {/* <Button
            fullWidth
            variant="outlined"
            onClick={() => alert('Sign in with Google')}
            startIcon={<GoogleIcon />}
          >
            Sign in with Google
          </Button>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => alert('Sign in with Facebook')}
            startIcon={<FacebookIcon />}
          >
            Sign in with Facebook
          </Button> */}
        </Box>
      </Card>
    </Box>
  );
}
