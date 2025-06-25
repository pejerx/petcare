import React from 'react';
import './Login.css';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-left">
        <h2 className="brand"><strong>Fetch</strong><span>&</span><span className="light">Fur</span></h2>
        <h1>Login</h1>

        <TextField label="Email" variant="outlined" fullWidth margin="normal" />
        <TextField label="Password" variant="outlined" fullWidth margin="normal" type="password" />

        <div className="forgot-password">Forgot Password?</div>

        <Button fullWidth variant="contained" color="primary" className="login-button">
          Sign in
        </Button>

        <div className="or">Or Continue With</div>
        <div className="social-buttons">
          <Button variant="outlined">G</Button>
          <Button variant="outlined">f</Button>
          <Button variant="outlined">🔵</Button>
        </div>

        <p className="bottom-text">
          Don't have an account yet?{' '}
          <span className="link" onClick={() => navigate('/signup')}>Register for free</span>
        </p>
      </div>

      <div className="login-right">
        <img src="/Pictures/1.png" alt="Dogs" />
      </div>
    </div>
  );
};

export default Login;
