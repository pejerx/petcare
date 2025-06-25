import React from 'react';
import { Button } from '@mui/material';
import './Header.css';
import { useNavigate } from 'react-router-dom';

const CustomNavbar = ({ handleOpen }) => {
  const navigate = useNavigate();

  const goToAppointment = () => {
    navigate('/appointment');
  };

  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-links">
          {['Services', 'Products', 'About', 'Contact'].map((label) => (
            <li key={label}>
              <Button onClick={handleOpen} variant="text" color="inherit">
                {label}
              </Button>
            </li>
          ))}
          <li>
            <Button onClick={goToAppointment} variant="text" color="inherit">
              Book now
            </Button>
          </li>
        </ul>
        <div className="brand">
          <span className="brand-bold">Fetch</span>&<span className="brand-light">Fur</span>
        </div>
        <div className="nav-right">
          <input type="text" placeholder="Search" />
          <Button onClick={handleOpen} variant="outlined">Sign in</Button>
          <div className="profile-icon" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
