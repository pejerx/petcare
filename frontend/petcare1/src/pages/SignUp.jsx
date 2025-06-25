import React from 'react';
import './SignUp.css';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-left">
        <h2 className="brand"><strong>Fetch</strong><span>&</span><span className="light">Fur</span></h2>
        <h1>Sign Up</h1>

        <TextField label="Full Name" variant="outlined" fullWidth margin="normal" />
        <TextField label="Email" variant="outlined" fullWidth margin="normal" />
        <TextField label="Password" variant="outlined" type="password" fullWidth margin="normal" />
        <TextField label="Confirm Password" variant="outlined" type="password" fullWidth margin="normal" />

        <Button fullWidth variant="contained" color="primary" className="login-button">
          Create Account
        </Button>

        <div className="or">Or Continue With</div>
        <div className="social-buttons">
          <Button variant="outlined">G</Button>
          <Button variant="outlined">f</Button>
          <Button variant="outlined">🔵</Button>
        </div>

        <p className="bottom-text">
          Already have an account?{' '}
          <span className="link" onClick={() => navigate('/login')}>Login here</span>
        </p>
      </div>

      <div className="login-right">
        <img src="/Pictures/1.png" alt="Dogs" />
      </div>
    </div>
  );
};

export default SignUp;
