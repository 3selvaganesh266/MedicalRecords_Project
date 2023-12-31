import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography } from '@mui/material';



const Forgotpassword = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();
 
const [emailError, setEmailError] = useState('');
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
      };
  
      if (!validateEmail(credentials.email)) {
        setEmailError('Invalid email format');
        alert("Invalid Email format");
        return;
      }
    e.preventDefault();
    console.log('Credentials:', credentials);
  
    navigate('/login');
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
        <h1 /> Recover Your Account
      </Typography>

      <form onSubmit={handleSubmit}>
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
          sx={{ width: '90%', mb: 1,marginLeft:"10px" }} 
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="NewPassword"
          type="password"
          id="password"
          autoComplete="current-password"
          value={credentials.password}
          onChange={handleChange}
          sx={{ width: '90%', mb: 1,marginLeft:"10px" }} 
        />
        <br/><br/><br/>
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, mb: 1, backgroundColor: 'black',width: '90%',marginLeft:"10px"  }}>
          Submit
        </Button>
       
      
      </form>
    </div>
  );
};

export default Forgotpassword;