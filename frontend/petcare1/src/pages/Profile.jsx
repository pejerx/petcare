import React, { useState, useEffect } from 'react';
import './Profile.css';
import { TextField, Button, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

import {
  getAppointments,
  updateAppointment,
  deleteAppointment,
} from '../api/appointment';

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

  const [pets] = useState([{ name: 'Jacob', breed: 'Golden Retriever' }]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    getAppointments().then((res) => setHistory(res.data));
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleUpdate = (id, oldData) => {
    const newDate = prompt('Enter new date (YYYY-MM-DD):', oldData.date);
    if (newDate) {
      updateAppointment(id, { ...oldData, date: newDate }).then(() => {
        alert('Appointment updated');
        getAppointments().then((res) => setHistory(res.data));
      });
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to cancel this appointment?')) {
      deleteAppointment(id).then(() => {
        alert('Appointment cancelled');
        setHistory((prev) => prev.filter((item) => item.id !== id));
      });
    }
  };

  const goTo = (path) => navigate(path);

  return (
    <>
     <Header/>

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
              <h4>Appointment History</h4>
              {history.length === 0 ? (
                <p>No appointments found.</p>
              ) : (
                history.map((log, i) => (
                  <div key={i} className="history-entry">
                    <div><strong>{log.petName}</strong> - {log.serviceType}</div>
                    <div>{log.date} at {log.time}</div>
                    <div>Status: {log.status}</div>
                    <Button
                      size="small"
                      onClick={() => handleUpdate(log.id, log)}
                      variant="outlined"
                    >
                      Edit
                    </Button>
                    <Button
                      size="small"
                      color="error"
                      onClick={() => handleDelete(log.id)}
                      variant="outlined"
                    >
                      Cancel
                    </Button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
