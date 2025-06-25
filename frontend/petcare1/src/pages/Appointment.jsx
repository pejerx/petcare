import React, { useState } from 'react';
import {
  Box,
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Paper,
} from '@mui/material';
import './Appointment.css';
import { useNavigate } from 'react-router-dom';
import { createAppointment } from "../api/appointment"; 

const Appointment = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    petName: '',
    date: '',
    time: '',
    serviceType: '',
    status: 'Pending',
    notes: '',
  });

  const handleClose = () => {
    navigate('/');
  };

  const handleSubmit = async () => {
    try {
      await createAppointment({
        ...formData,
        date: formData.date, // YYYY-MM-DD
        time: formData.time, // HH:mm
      });
      alert('Appointment created successfully!');
      navigate('/profile');
    } catch (err) {
      console.error(err);
      alert('Failed to submit appointment.');
    }
  };

  return (
    <>
      <header className="header">
        <nav className="nav">
          <ul className="nav-links">
            <Button onClick={() => navigate('/shop')} variant="text" color="inherit">
              Products
            </Button>
            {['Services', 'About', 'Contact'].map((label) => (
              <li key={label}>
                <Button 
                  onClick={label === 'Contact' ? () => alert("📞 1234-456-7890 | 📱 123-456-7890") : () => alert('This feature is coming soon!')} 
                  variant="text" color="inherit">
                  {label}
                </Button>
              </li>
            ))}
            <li>
              <Button onClick={() => navigate('/appointment')} variant="text" color="inherit">
                Book now
              </Button>
            </li>
          </ul>
          <div className="brand" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            <span className="brand-bold">Fetch</span>&<span className="brand-light">Fur</span>
          </div>
          <div className="nav-right">
            <input type="text" placeholder="Search" />
            <Button onClick={() => navigate('/login')} variant="outlined">Sign in</Button>
            <div className="profile-icon" />
          </div>
        </nav>
      </header>

      <Box className="appointment-wrapper">
        <Paper elevation={4} className="appointment-container">
          <Box className="appointment-header">
            <Typography variant="h6">Add Appointment</Typography>
            <Button sx={{ color: 'white' }} onClick={handleClose}>
              Close ✕
            </Button>
          </Box>

          <Box className="appointment-body">
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <InputLabel className="input-label">Pet Name</InputLabel>
                <TextField
                  fullWidth
                  value={formData.petName}
                  onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                  placeholder="e.g. Max"
                />

                <Box mt={3}>
                  <InputLabel className="input-label">For when</InputLabel>
                  <TextField
                    type="date"
                    fullWidth
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </Box>

                <Box mt={3}>
                  <InputLabel className="input-label">Service</InputLabel>
                  <Select
                    fullWidth
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  >
                    <MenuItem value="Grooming">Grooming</MenuItem>
                    <MenuItem value="Vaccination">Vaccination</MenuItem>
                    <MenuItem value="Check-up">Check-up</MenuItem>
                  </Select>
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <InputLabel className="input-label">Time</InputLabel>
                <Select
                  fullWidth
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                >
                  <MenuItem value="10:00">10AM - 12PM</MenuItem>
                  <MenuItem value="13:00">1PM - 2PM</MenuItem>
                  <MenuItem value="14:00">2PM - 4PM</MenuItem>
                  <MenuItem value="16:00">4PM - 6PM</MenuItem>
                </Select>

                <Box mt={3}>
                  <InputLabel className="input-label">Notes</InputLabel>
                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Any special instructions?"
                  />
                </Box>
              </Grid>
            </Grid>

            <Box className="appointment-footer">
              <Button variant="outlined" color="inherit" onClick={handleClose}>Cancel</Button>
              <Button variant="contained" color="success" onClick={handleSubmit}>Confirm</Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default Appointment;
