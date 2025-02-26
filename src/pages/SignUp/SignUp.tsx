import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import { GoogleIcon, FacebookIcon, SitemarkIcon } from './CustomIcons.tsx';
// import AppTheme from '../shared-theme/AppTheme';
// import ColorModeSelect from '../shared-theme/ColorModeSelect';
import flikTapeLogoImage from "../../assets/images/FliktapeLogo.webp";
import flikTapeVHSImage from "../../assets/images/VHS.webp";
import { CardContent, MenuItem, Radio, RadioGroup, Select } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
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

const SignUpContainer = styled(Stack)(({ theme }) => ({
    height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
    minHeight: '100%',
    margin: 0,
    width: '100vw',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(4),
    },
    '&::before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      zIndex: -1,
      inset: 0,
      //backgroundImage: 'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
      backgroundColor: 'hsl(0, 0%, 0%)',
      backgroundRepeat: 'no-repeat',
      ...theme.applyStyles('dark', {
        backgroundImage:
          'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
      }),
    },
}));

const FlikTapeVHSIcon = ({ width = '100%', height = '100%' }) => {
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

export default function SignUp(props: { disableCustomTheme?: boolean }) {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [nameError, setNameError] = React.useState(false);
  const [nameErrorMessage, setNameErrorMessage] = React.useState('');
  const navigate = useNavigate();

  const maxImageHeight = '30vh';
  const maxCardWidth=2000;
  const minCardWidth=550;

  const validateInputs = () => {
    const email = document.getElementById('email') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;
    const name = document.getElementById('name') as HTMLInputElement;

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

    if (!name.value || name.value.length < 1) {
      setNameError(true);
      setNameErrorMessage('Name is required.');
      isValid = false;
    } else {
      setNameError(false);
      setNameErrorMessage('');
    }

    return isValid;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (nameError || emailError || passwordError) {
      event.preventDefault();
      return;
    }
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get('name'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const SignUpCard=()=>{
    return (
      <Card variant="outlined" sx={{padding: 2,gap: 0.4,margin: 0,width: '100%'}}>
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
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <FormControl>
            <FormLabel htmlFor="name">Full name</FormLabel>
            <TextField
              autoComplete="name"
              name="name"
              required
              fullWidth
              id="name"
              placeholder="Jon Snow"
              error={nameError}
              helperText={nameErrorMessage}
              color={nameError ? 'error' : 'primary'}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <TextField
              required
              fullWidth
              id="email"
              placeholder="your@email.com"
              name="email"
              autoComplete="email"
              variant="outlined"
              error={emailError}
              helperText={emailErrorMessage}
              color={passwordError ? 'error' : 'primary'}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <TextField
              required
              fullWidth
              name="password"
              placeholder="••••••"
              type="password"
              id="password"
              autoComplete="new-password"
              variant="outlined"
              error={passwordError}
              helperText={passwordErrorMessage}
              color={passwordError ? 'error' : 'primary'}
            />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            label="I want to receive updates via email."
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={validateInputs}
          >
            Sign up
          </Button>
        </Box>
        <Divider>
          <Typography sx={{ color: 'text.secondary' }}>or</Typography>
        </Divider>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {/* <Button
            fullWidth
            variant="outlined"
            onClick={() => alert('Sign up with Google')}
            startIcon={<GoogleIcon />}
          >
            Sign up with Google
          </Button>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => alert('Sign up with Facebook')}
            startIcon={<FacebookIcon />}
          >
            Sign up with Facebook
          </Button>
          <Typography sx={{ textAlign: 'center' }}>
            Already have an account?{' '}
            <Link
              href="/material-ui/getting-started/templates/sign-in/"
              variant="body2"
              sx={{ alignSelf: 'center' }}
            >
              Sign in
            </Link>
          </Typography> */}
        </Box>
      </Card>
    )
  }

  const onClickLogin=(event: React.MouseEvent<HTMLButtonElement>)=>{
       navigate("/signin");
  };

  const [selectedDate, setSelectedDate] = React.useState(null);
  const [formattedDate, setFormattedDate] = React.useState("");
  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    setFormattedDate(dayjs(newDate).format('DD-MM-YYYY') );
  };

  //const formattedDate = selectedDate ? dayjs(selectedDate).format('DD-MM-YYYY') : '';

  const SignUpCardNew = () => {
    return (
      <Card
        sx={{
          maxWidth: maxCardWidth,
          minWidth: minCardWidth,
          width: '100%',
          margin: 10,
          padding: 0,
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        {/* <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '10vh',
          width: '100%',
        }}
      >
          <Box
            component="img"
            src={flikTapeLogoImage}
            alt="FlikTapeLogo"
            sx={{
              p: 16,
              width: '100%',
              aspectRatio: '1 / 1', // Maintain square aspect ratio
              objectFit: 'contain', // Prevents cropping
            }}
          />
        </Box> */}
        <CardContent>
          <Typography variant="h5" fontWeight="bold" textAlign="center">
            Create a new account
          </Typography>
  
          <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
            <TextField fullWidth placeholder="First name" variant="outlined" />
            <TextField fullWidth placeholder="Surname" variant="outlined" />
          </Box>
  
          <FormControl fullWidth sx={{ mt: 2 }}>
            <FormLabel>Date of birth</FormLabel>
            {/* <Box sx={{ display: "flex", gap: 1 }}>
              <Select defaultValue={24} fullWidth>
                {[...Array(31).keys()].map((day) => (
                  <MenuItem key={day + 1} value={day + 1}>
                    {day + 1}
                  </MenuItem>
                ))}
              </Select>
              <Select defaultValue={"Feb"} fullWidth>
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(
                  (month) => (
                    <MenuItem key={month} value={month}>
                      {month}
                    </MenuItem>
                  )
                )}
              </Select>
              <Select defaultValue={2025} fullWidth>
                {[...Array(100).keys()].map((i) => (
                  <MenuItem key={2025 - i} value={2025 - i}>
                    {2025 - i}
                  </MenuItem>
                ))}
              </Select>
            </Box> */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Box sx={{ display: "flex", gap: 1 }}>
                <DatePicker
                  label={''}
                  value={selectedDate}
                  onChange={handleDateChange}
                  sx={{width: '100%'}}
                />
              </Box>
            </LocalizationProvider>
          </FormControl>
  
          <FormControl fullWidth sx={{ mt: 2 }}>
            <FormLabel>Gender</FormLabel>
            <RadioGroup row defaultValue="female">
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="transgender" control={<Radio />} label="Transgender" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
  
          <TextField fullWidth placeholder="Mobile number or email" sx={{ mt: 2 }} />
          <TextField fullWidth placeholder="New password" type="password" sx={{ mt: 2 }} />
  
          <Button variant="contained" fullWidth sx={{ mt: 2, bgcolor: "green",width: '100%',height: '8vh' }}>
            <Typography textAlign="center" sx={{textTransform:'none' }}>Sign Up</Typography>
          </Button>
  
          <Typography textAlign="center" sx={{ mt: 2 }}>
            <Button onClick={onClickLogin} sx={{textTransform:'none'}}>Already have an account?</Button>
          </Typography>
        </CardContent>
      </Card>
    );
  };

  return (
      <Box
          sx={{
            height: '100vh', // Full screen height
            width: '100vw', // Full screen width
            p: { xs: 2, sm: 4, md: 1 }, // Padding applied to the wrapper
            boxSizing: 'border-box', // Ensures padding doesn't affect width
            overflow: 'hidden',
            backgroundRepeat: 'no-repeat',
            backgroundImage: 'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))'
          }}
        >
          <Stack
            direction={{ xs: 'column-reverse', md: 'row' }}
            component="main"
            sx={{
              justifyContent: 'space-around',
              gap: { xs: 6, sm: 12,md:4 },
              p: { xs: 2, sm: 4, md: 0 },
              m: 0,
              height: '100%', // Full screen height
              width: '100%', // Full screen width
            }}
          >
              <Box sx={{ flex: { xs: 1, md: 5 }, display: 'flex', flexDirection:'column',justifyContent: 'center', alignItems: 'center', gap: 0.2, width: '100vw',padding:1,overflow: 'hidden' }}>
                    <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: '100%',
                          height: '100%',
                          maxHeight: maxImageHeight, // Limit the height to 20vh (as per the container)
                          maxWidth: '100%', // Ensure the width doesn’t go beyond container width
                          overflow: 'hidden',
                          p: 0
                        }}
                      >
                          <Box
                            component="img"
                            src={flikTapeLogoImage}
                            alt="FlikTapeLogo"
                            sx={{
                              width: '100%',
                              height: '100%',
                              maxWidth: '100%',
                              maxHeight: maxImageHeight,
                              aspectRatio: '1 / 1', // Maintain square aspect ratio
                              objectFit: 'contain', // Prevents cropping
                            }}
                          />
                    </Box>
                    <Box>
                      <Typography variant="h5" textAlign="center">
                          Unleash Your Voice: Share, Discover, and Connect on Your Next Favorite Video Platform!
                      </Typography>
                    </Box>
              </Box>
              <Box sx={{ flex: { xs: 1, md: 7 }, display: 'flex', justifyContent: 'flex-end', alignItems: 'stretch',width: '100vw' }}>
                <SignUpCardNew />
              </Box>
          </Stack>
      </Box>
  );
}
