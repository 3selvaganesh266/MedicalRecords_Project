import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography } from '@mui/material';
import { useAuth } from './LoginAuth';
import IconButton from '@mui/material/IconButton';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Credentials:', credentials);
    alert(`Welcome, ${credentials.username}!`);
    login(credentials.username);
    navigate('/home');
  };

  const handleForgotPassword = () => {
    navigate('/forgotpassword');
  };

  const handleGoogleSignIn = () => {
    alert('Signing in with Google...');
  };

  const handleFacebookSignIn = () => {
    alert('Signing in with Facebook...');
  };

  const handleTwitterSignIn = () => {
    alert('Signing in with Twitter...');
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
        fontSize: '1px',
      }}
    >
      <img src='Logo12.jpeg' alt='logo' style={{ height: '10%', borderRadius: '50px' }}  onClick={() => navigate('/outlogin')}/>
      <Typography component="h1" variant="h5" style={{ fontSize: '24px' }}>
        <h1 /> Welcome Back
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
          sx={{ width: '100%', mb: 1,marginRight:"80px" }} 
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
          sx={{ width: '100%', mb: 1}} 
        />
        <br/><br/><br/>
         <span
            style={{ cursor: 'pointer', color: 'blue', fontSize: '18px' }}
            onClick={handleForgotPassword}
          >
           <a style={{marginLeft:"5px"}}> Forgot Password?</a>
          </span>
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, backgroundColor: 'black' }}>
          Login
        </Button>

        <Typography variant="body2" color="textSecondary" style={{ fontSize: '16px' }}>
          Don't have an account?{' '}
          <span style={{ cursor: 'pointer', color: 'blue', fontSize: '18px' }} onClick={() => navigate('/signup')}>
            Sign up here<br/>
          </span>
        </Typography>
        <div>
          <IconButton onClick={handleGoogleSignIn} style={{ color: 'black', height: '50px' }}>
         
            <GoogleIcon fontSize="large" />
          </IconButton>
          <IconButton onClick={handleFacebookSignIn} style={{ color: 'black' }}>
            <FacebookIcon fontSize="large" />
          </IconButton>
          <IconButton onClick={handleTwitterSignIn} style={{ color: 'black' }}>
            <TwitterIcon fontSize="large" />
          </IconButton>
        </div>
        {/* <span style={{ cursor: 'pointer', color: 'blue', fontSize: '18px',marginBottom:'200px'}} onClick={() => navigate('/outlogin')}>
           <h1/>Without Login<br/>
          </span> */}
      </form>
    </div>
  );
};

export default LoginForm;