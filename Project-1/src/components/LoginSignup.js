import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography } from '@mui/material';
import { useAuth } from './signupAuth'; 

const SignupForm = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    email: '',
    password: '',
    Confirm_Password: '',
  });
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate();
  const { signup } = useAuth(); 
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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

    signup();
    alert(`Welcome, ${credentials.username}!`);
    navigate('/home');
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
      }}
    >
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
        <br />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          error={!!emailError}
          helperText={emailError}
          value={credentials.email}
          onChange={handleChange}
        />
        <br />
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
        <br />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="Confirm_Password"
          label="Confirm Password"
          name="Confirm_Password"
          type="password"
          error={passwordError !== ''}
          helperText={passwordError}
          autoComplete="Confirm_Password"
          value={credentials.Confirm_Password}
          onChange={handleChange}
        />

        <Button type="submit" fullWidth variant="contained" style={{ marginTop: 20, backgroundColor: 'black', color: 'white' }}>
          Sign Up
        </Button>

        <Typography variant="body2" color="textSecondary" style={{ marginTop: 10 }}>
          Already have an Account?{' '}
          <span style={{ cursor: 'pointer', color: 'blue', fontSize: '16px' }} onClick={() => navigate('/login')}>
            Login
          </span>
        </Typography>
      </form>
    </div>
  );
};

export default SignupForm;
