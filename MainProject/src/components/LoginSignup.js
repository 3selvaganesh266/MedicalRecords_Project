import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { TextField, Button, Typography, Link } from '@mui/material';
const LoginSignup = (props) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Credentials:', credentials);

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
      };

    if (!validateEmail(credentials.email)) {
        setEmailError('Invalid email format');
        return;
      }

    if (credentials.password !== credentials.Confirm_Password) {
        setPasswordError("Passwords don't match");
        return;
      }
    if (credentials.password === credentials.Confirm_Password) {
        setPasswordError("Passwords don't match");
        return;
      }

    if (props.onSubmit) {
      props.onSubmit(credentials);
    }
  };
  return (
    <div
      style={{
        backgroundImage: 'url("https://img.freepik.com/premium-photo/white-color-medical-equipment-clean-concept_117856-1892.jpg?w=1060")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
       
      }}>
          <Typography component="h1" variant="h5">
         
            Sign Up
           
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
          
              value={credentials.username}
              onChange={handleChange}
            />
       <br></br>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="email"
              name="email"
              autoComplete="email"
              error={!!emailError}
              width= "100%"
              padding= "12px 20px"
              box-sizing= "border-box"
              border= " none"
              border-bottom= "2px solid red"
          
              value={credentials.email}
              onChange={handleChange}
            />

<br></br>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={credentials.password}
              onChange={handleChange}
            />
       <br></br>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="Confirm_Password"
              label="Confirm_Password"
              name="Confirm_Password"
               type="password"
               error={passwordError !== ''}
              autoComplete="Confirm_Password"
          
              value={credentials.Confirm_Password}
              onChange={handleChange}
            />
     

            <Button type="submit" fullWidth variant="contained"  sx={{ mt: 3, mb: 2,backgroundColor: 'black'}}>
            <Link component={RouterLink} to="/Home" color="primary" style={{ textDecoration: 'none', 
  color: 'black',color:'white' }}> Sign Up </Link>
            </Button>
            <Typography variant="body2" color="textSecondary">
              Already have an Account?{' '}
              <Link component={RouterLink} to="/login" color="primary">
               Login
              </Link>
            </Typography>
          </form>
    </div>
  );
};
export default LoginSignup;
