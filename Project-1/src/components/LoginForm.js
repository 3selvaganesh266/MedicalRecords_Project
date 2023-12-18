import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { TextField, Button, Typography, Link } from '@mui/material';
const LoginForm = (props) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Credentials:', credentials);

    if (props.onSubmit) {
      props.onSubmit(credentials);
    }
  };
  return (
    <div
  
      style={{
        backgroundImage: 'url("https://img.freepik.com/free-photo/medical-desk-with-stethoscope-mask_23-2148519724.jpg?w=1060&t=st=1702717558~exp=1702718158~hmac=46c282dd292c480de13c22cef799f04665e7ca992b5d7fe998b6e434f548d789")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
       
      }}>
        <img src='Logo12.jpeg' alt='logo' style={{height:"10%",borderRadius:"50px"}}/>
          <Typography component="h1" variant="h5">
           <h1/> Welcome Back
           
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
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={credentials.password}
              onChange={handleChange}
            />

            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2,backgroundColor: 'black' }}>
            <Link component={RouterLink} to="/Home" color="primary" style={{ textDecoration: 'none', 
  color: 'black',color:'white' }}>
               Login
              </Link>
            </Button>

            <Typography variant="body2" color="textSecondary">
              Don't have an account?{' '}
              <Link component={RouterLink} to="/signup" color="primary" >
                Sign up here 
              </Link>
            </Typography>
          </form>
        {/* </Box> */}
      {/* </Container> */}
    </div>
  );
};
export default LoginForm;