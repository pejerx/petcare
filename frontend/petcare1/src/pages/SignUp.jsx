import React, { useState } from 'react';
import './SignUp.css';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import axios from 'axios';
import logo from '/src/assets/fetch_and_fur_logo1.png';

const SignUp = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phoneNumber: '',
    address: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  const handleSubmit = async () => {
    setError('');
    setSuccess('');

    const {
      firstname,
      lastname,
      email,
      phoneNumber,
      address,
      password,
      confirmPassword,
    } = form;

    if (!firstname || !lastname || !email || !phoneNumber || !address || !password || !confirmPassword) {
      setError('Please fill out all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      await axios.post('http://localhost:8080/api/petowners', {
        firstname,
        lastname,
        email,
        phoneNumber,
        address,
        password, // ✅ include password
      });

      setSuccess('Account created successfully!');
      alert('Account created successfully!');
      navigate('/login');
    } catch (err) {
  console.error('Backend error:', err); // ✅ log the real error

  if (err.response?.data) {
    setError(err.response.data); // Show specific backend message
  } else {
    setError('Registration failed. Please try again.');
  }
}
  };

  return (
    <>
      <Header />
      <div className="login-container">
        <div className="login-left">
          <img src={logo} width={150} height={40} alt="Logo"/>
          <h1>Sign Up</h1>

          <TextField
            label="First Name"
            name="firstname"
            value={form.firstname}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Last Name"
            name="lastname"
            value={form.lastname}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />
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
            label="Phone Number"
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Address"
            name="address"
            value={form.address}
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
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={form.confirmPassword}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />

          {error && <p style={{ color: 'red' }}>{error}</p>}
          {success && <p style={{ color: 'green' }}>{success}</p>}

          <Button
            fullWidth
            variant="contained"
            color="primary"
            className="login-button"
            onClick={handleSubmit}
          >
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
    </>
  );
};

export default SignUp;
