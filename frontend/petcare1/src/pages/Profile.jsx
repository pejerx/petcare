import React, { useState } from 'react';
import './Profile.css';
import { TextField, Button, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    fullName: 'Jane Doe',
    nickName: 'Nene',
    email: 'janedoe01@gmail.com',
    gender: 'Female',
    country: 'Philippines',
  });

  const [pets] = useState([
    { name: 'Jacob', breed: 'Golden Retriever' }
  ]);

  const [history] = useState([
    { date: '01/02/25 10:00:00am', service: 'Check up', pet: 'Jacob' },
    { date: '01/02/25 18:52:00pm', service: 'Anti-Rabies Shots', pet: 'Jacob' },
  ]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleOpen = () => {
    alert("This feature is coming soon!");
  };

  const goToAppointment = () => {
    navigate('/appointment');
  };

  const goToHome = () => {
    navigate('/');
  };

  const goToLogin = () => {
    navigate('/login');
  };

  const goToShop = () => {
    navigate('/shop');
  };

  return (
    <>
      <header className="header">
        <nav className="nav">
          <ul className="nav-links">
            <Button onClick={goToShop} variant="text" color="inherit">
                Products
              </Button>
            {['Services', 'About', 'Contact'].map((label) => (
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
          <div className="brand" onClick={goToHome} style={{ cursor: 'pointer' }}>
            <span className="brand-bold">Fetch</span>&<span className="brand-light">Fur</span>
          </div>
          <div className="nav-right">
            <input type="text" placeholder="Search" />
            <Button onClick={goToLogin} variant="outlined">Sign in</Button>
            <div className="profile-icon" />
          </div>
        </nav>
      </header>

      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-avatar">
            <img src="/Pictures/1.png" alt="avatar" />
          </div>
          <div>
            <h3>{profile.fullName}</h3>
            <p>{profile.email}</p>
          </div>
          <div style={{ marginLeft: 'auto' }}>
            <Button variant="contained" onClick={() => setIsEditing(!isEditing)}>
              {isEditing ? 'Save' : 'Edit'}
            </Button>
          </div>
        </div>

        <div className="profile-details">
          <div className="left-fields">
            <TextField
              fullWidth
              label="Full Name"
              name="fullName"
              value={profile.fullName}
              onChange={handleChange}
              disabled={!isEditing}
              margin="normal"
            />
            <TextField
              select
              fullWidth
              label="Gender"
              name="gender"
              value={profile.gender}
              onChange={handleChange}
              disabled={!isEditing}
              margin="normal"
            >
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Male">Male</MenuItem>
            </TextField>

            <div className="pets-box">
              <h4>My Pets</h4>
              {pets.map((pet, i) => (
                <div key={i} className="pet-entry">
                  🐶 {pet.name} - {pet.breed}
                </div>
              ))}
              <Button className="add-pet-btn" variant="outlined">+ Add/Register Your Pet</Button>
            </div>
          </div>

          <div className="right-fields">
            <TextField
              fullWidth
              label="Nick Name"
              name="nickName"
              value={profile.nickName}
              onChange={handleChange}
              disabled={!isEditing}
              margin="normal"
            />
            <TextField
              select
              fullWidth
              label="Country"
              name="country"
              value={profile.country}
              onChange={handleChange}
              disabled={!isEditing}
              margin="normal"
            >
              <MenuItem value="Philippines">Philippines</MenuItem>
              <MenuItem value="USA">USA</MenuItem>
            </TextField>

            <div className="history-box">
              <h4>History</h4>
              {history.map((log, i) => (
                <div key={i} className="history-entry">
                  <div>{log.date}</div>
                  <div>{log.service}</div>
                  <div>{log.pet}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
