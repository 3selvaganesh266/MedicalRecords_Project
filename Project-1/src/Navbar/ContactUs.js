import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Checkbox, FormControlLabel } from '@mui/material';

const ContactUS = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    email: '',
    hospitalName: '',
    message: '',
    robotVerification: false,
  });

  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setCredentials({ ...credentials, robotVerification: e.target.checked });
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
    alert("Message Received Successfully");
    navigate('');
  };

  return (
    <div
      style={{
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '60vh',
        width:'60vh',
        marginLeft:'560px',
        marginTop:'150px',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography component="h1" variant="h5">
        <h3>ContactUs</h3>
      </Typography>
      <br/>
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
          id="hospitalName"
          label="HospitalName"
          name="hospitalName"
          autoComplete="hospitalName"
          value={credentials.hospitalName}
          onChange={handleChange}
        />
        <br />


        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          multiline
          rows={3}
          id="message"
          label="Message "
          name="message"
          autoComplete="message"
          value={credentials.message}
          onChange={handleChange}
        />
        <br />
        <FormControlLabel
          control={
            <Checkbox
              checked={credentials.robotVerification}
              onChange={handleCheckboxChange}
              color="primary"
              style={{ color: 'green' }} 
            />
          }
          required
          onChange={handleChange}
          label="I am Not a Robot?"
        />
        <br />

        <Button type="submit" fullWidth variant="contained" style={{ marginTop: 20, backgroundColor: 'black', color: 'white' }}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactUS;
