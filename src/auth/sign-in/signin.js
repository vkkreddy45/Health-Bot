import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import { useUserEmail } from '../../userEmailProvider';

export default function SignIn() {
  // const { login } = useUser();
  // const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInSuccess, setSignInSuccess] = useState(false);
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const { userEmail, setUserEmail } = useUserEmail();
  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
    setEmailError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setEmailError('');
    setPasswordError('');

    // // Check if email is empty
    // if (!email.trim()) {
    //   setEmailError('Email is required.');
    //   return;
    // }

    // // Check if password is empty
    // if (!password.trim()) {
    //   setPasswordError('Password is required.');
    //   return;
    // }
    
    try {
      const response = await axios.post('http://127.0.0.1:5000/login', { email: userEmail, password });
      if (response.data.success) {
        // Sign-in successful
        // login(email);
        setSignInSuccess(true);
      } else {
        // Sign-in failed, handle error
        setError(response.data.message);
      }
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <a href='/'><img
                src={
                  './Ciberts_logo.jpeg'
                }
                style={{width: '120px', height: 'auto', cursor: 'pointer', marginTop: '5px', position: 'absolute', top: 15, left: 20}}
                alt="logo of ciberts"
              /></a>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={userEmail}
              onChange={handleEmailChange}
              error={!!emailError}
              helperText={emailError}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={handlePasswordChange}
              error={!!passwordError}
              helperText={passwordError}

            />
            {error && <Typography variant="body2" color="error">{error}</Typography>}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs marginLeft={'-20px'}>
                <RouterLink to="/signup" style={{ textDecoration: 'none' }}>
                    <Button variant="text" color="primary">
                      Don't have an account? Sign Up
                    </Button>
                </RouterLink>
              </Grid>
              <Grid item xs marginLeft={'80px'} marginRight={'-20px'}>
                <RouterLink to="#" style={{ textDecoration: 'none' }}>
                    <Button variant="text" color="primary">
                      Forgot Password?
                    </Button>
                </RouterLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      {signInSuccess && <Navigate to="/dashboard" />}
    </ThemeProvider>
  );
}