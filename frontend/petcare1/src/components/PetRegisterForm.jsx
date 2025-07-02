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
import { createPet } from "../api/pet"; 
import Header from './Header';

const PetRegister = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    petName: '',
    type: '',
    weight: '',
    breed: '',
    status: 'Pending',
    notes: '',
  });

  const handleClose = () => {
    navigate('/');
  };

  const handleSubmit = async () => {
  try {
    await createPet({
      petname: formData.petName,
      type: formData.type,
      weight: parseFloat(formData.weight),
      breed: formData.breed,
      notes: formData.notes,
      status: formData.status
    });
    alert('Pet submitted successfully!');
    navigate('/profile');
  } catch (err) {
    console.error(err);
    alert('Failed to register pet.');
  }
};


  return (
    <>
      <Header/>

      <Box className="appointment-wrapper">
        <Paper elevation={4} className="appointment-container">
          <Box className="appointment-header">
            <Typography variant="h6">Register Pet</Typography>
            <Button sx={{ color: 'white' }} onClick={handleClose}>
              Close ✕
            </Button>
          </Box>

          <Box className="appointment-body">
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <InputLabel className="input-label">Pet Name</InputLabel>
                <TextField
        className="textfield-long"
        fullWidth
        value={formData.weight}
        onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
        placeholder="10 pounds"
      />

                <Box mt={3}>
                  <InputLabel className="input-label">Type of Animal</InputLabel>
                  <Select
                    fullWidth
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  >
                    <MenuItem value="Dog">Dog</MenuItem>
                    <MenuItem value="Cat">Cat</MenuItem>
                    <MenuItem value="Bird">Bird</MenuItem>
                    <MenuItem value="Reptile">Reptile</MenuItem>
                  </Select>
                </Box>

                <Box mt={3}>
                  <InputLabel className="input-label">Weight</InputLabel>
                  <TextField
                  className="textfield-long"
                   fullWidth
                   value={formData.petName}
                   onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                   placeholder="10 pounds"
                   />
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <InputLabel className="input-label">Breed</InputLabel>
                <TextField
                  fullWidth
                  value={formData.breed}
                  onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
                />

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

export default PetRegister;
