import React from 'react';
import Header from '../components/Header';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const VetDashboard = () => {
  const navigate = useNavigate();

  return (
    
      <div style={{ padding: '4rem', textAlign: 'center' }}>
        <h1>Welcome, Veterinarian!</h1>
        <p>This is your dashboard. More vet features coming soon!</p>
        <Button variant="contained" onClick={() => navigate('/')}>Return Home</Button>
      </div>
    
  );
};

export default VetDashboard;
