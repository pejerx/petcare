import React, { useState } from 'react';
import './Login.css';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import axios from 'axios';
import logo from '/src/assets/fetch_and_fur_logo1.png';

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    setError('');

    if (!form.email || !form.password) {
      setError('Please fill in both fields.');
      return;
    }

    try {
      const res = await axios.post('http://localhost:8080/api/petowners/login', {
        email: form.email,
        password: form.password,
      });

      
      // Save user info in local storage
      localStorage.setItem('petOwner', JSON.stringify(res.data));

      localStorage.setItem('user', JSON.stringify({ name: res.data.name || 'Pet Owner' }));
      window.dispatchEvent(new Event('storageChange'));

      // Navigate to profile
      navigate('/profile');
    } catch (err) {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <>
      <Header />
      <div className="login-container">
        <div className="login-left">
          <h2 className="brand">
            <img src={logo} width={150} height={40} alt="Logo"/>
          </h2>
          <h1>Login</h1>

          <TextField
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />

          <div className="forgot-password">Forgot Password?</div>

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <Button
            fullWidth
            variant="contained"
            color="primary"
            className="login-button"
            onClick={handleLogin}
          >
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
            <span className="link" onClick={() => navigate('/signup')}>
              Register for free
            </span>
          </p>
        </div>

        <div className="login-right">
          <img src="/Pictures/1.png" alt="Dogs" />
        </div>
      </div>
    </>
  );
};

export default Login;
