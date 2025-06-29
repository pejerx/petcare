import React, { useState } from 'react';
import {
  Button,
  Grow,
  ClickAwayListener,
  Popper,
  Paper,
  Badge,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Box,
  Modal
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import AppointmentForm from '../components/AppointmentForm'; // Ensure this path matches your file structure
import logo from '/src/assets/fetch_and_fur_logo1.png';

const Header = () => {
  const navigate = useNavigate();

  // Dropdown states
  const [notifAnchor, setNotifAnchor] = useState(null);
  const [showNotif, setShowNotif] = useState(false);
  const [exploreAnchor, setExploreAnchor] = useState(null);
  const exploreOpen = Boolean(exploreAnchor);

  // Modal for Appointment
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  const notifications = [
    { id: 1, text: 'Appointment confirmed with Dr. Kim', time: '2h ago', icon: '🐶' },
    { id: 2, text: 'Your pet product has shipped!', time: '5h ago', icon: '📦' },
    { id: 3, text: 'New article: Pet Health & Wellness', time: '1d ago', icon: '📰' }
  ];

  const handleNotifClick = (e) => {
    setNotifAnchor(e.currentTarget);
    setShowNotif((prev) => !prev);
  };
  const handleNotifClose = () => setShowNotif(false);

  const handleExploreClick = (e) => setExploreAnchor(e.currentTarget);
  const handleExploreClose = () => setExploreAnchor(null);

  const goTo = (path) => {
    handleExploreClose();
    navigate(path);
  };

  return (
    <>
      <header className="header">
        <nav className="nav">
          {/* LEFT NAV */}
          <ul className="nav-links">
            <li>
              <Button onClick={handleExploreClick} variant="text" color="inherit">
                Explore
              </Button>
              <Popper
                open={exploreOpen}
                anchorEl={exploreAnchor}
                placement="bottom-start"
                transition
                style={{ zIndex: 1300 }}
              >
                {({ TransitionProps }) => (
                  <Grow {...TransitionProps}>
                    <Paper
                      onMouseLeave={handleExploreClose}
                      sx={{
                        mt: 1,
                        display: 'flex',
                        gap: 4,
                        p: 2,
                        borderRadius: 2,
                        border: '1px solid #ddd',
                        backgroundColor: '#fff',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                        minWidth: 400
                      }}
                    >
                      <Box>
                        <Typography variant="subtitle2" sx={{ mb: 1 }} color="textSecondary">
                          SERVICES
                        </Typography>
                        <List dense>
                          <ListItem button onClick={() => goTo('/adoption')}>
                            <ListItemText primary="Adopt a Pet" />
                          </ListItem>
                          <ListItem button onClick={() => goTo('/treatments')}>
                            <ListItemText primary="Treatment List" />
                          </ListItem>
                          <ListItem button onClick={() => goTo('/veterinarians')}>
                            <ListItemText primary="Veterinarians" />
                          </ListItem>
                        </List>
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" sx={{ mb: 1 }} color="textSecondary">
                          STORE SHORTCUTS
                        </Typography>
                        <List dense>
                          <ListItem button onClick={() => goTo('/cart')}>
                            <ListItemText primary="View Cart" />
                          </ListItem>
                          <ListItem button onClick={() => goTo('/wishlist')}>
                            <ListItemText primary="Wishlist" />
                          </ListItem>
                        </List>
                      </Box>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </li>

            <li>
              <Button onClick={() => navigate('/shop')} variant="text" color="inherit">
                Products
              </Button>
            </li>
            <li>
              <Button onClick={() => navigate('/about')} variant="text" color="inherit">
                About
              </Button>
            </li>
            <li>
              <Button onClick={() => setAppointmentOpen(true)} variant="text" color="inherit">
                Book Now
              </Button>
            </li>
          </ul>

          {/* LOGO */}
          <div className="brand" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            <img src={logo} width={200} height={50} alt="Logo"/>
          </div>

          {/* RIGHT NAV */}
          <div className="nav-right" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Button
              variant="text"
              color="inherit"
              size="small"
              onClick={() => alert('💬 Chat with our support: support@fetchfur.com')}
              startIcon={<SupportAgentIcon fontSize="small" />}
              sx={{ minWidth: 'auto', fontSize: '0.8rem', padding: '4px 8px' }}
            >
              Support
            </Button>

            <Button
              onClick={() => navigate('/login')}
              variant="outlined"
              size="small"
              sx={{ fontSize: '0.8rem', padding: '4px 12px' }}
            >
              Sign in
            </Button>

            {/* Instagram-style Notification */}
            <ClickAwayListener onClickAway={handleNotifClose}>
              <div>
                <Badge badgeContent={notifications.length} color="error">
                  <NotificationsIcon
                    onClick={handleNotifClick}
                    fontSize="small"
                    style={{ cursor: 'pointer', color: '#555' }}
                  />
                </Badge>
                <Popper
                  open={showNotif}
                  anchorEl={notifAnchor}
                  placement="bottom-end"
                  transition
                  style={{ zIndex: 1300 }}
                >
                  {({ TransitionProps }) => (
                    <Grow {...TransitionProps}>
                      <Paper
                        elevation={4}
                        sx={{
                          mt: 1,
                          width: 350,
                          borderRadius: '12px',
                          backgroundColor: '#fff',
                          border: '1px solid #e0e0e0',
                          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                        }}
                      >
                        <Box sx={{ px: 2, py: 1.5, borderBottom: '1px solid #eee' }}>
                          <Typography variant="subtitle1" fontWeight="bold">
                            Notifications
                          </Typography>
                        </Box>
                        <List dense disablePadding>
                          {notifications.map((notif) => (
                            <ListItem
                              key={notif.id}
                              alignItems="flex-start"
                              sx={{
                                px: 2,
                                py: 1.5,
                                '&:hover': {
                                  backgroundColor: '#f9f9f9',
                                  cursor: 'pointer',
                                },
                              }}
                            >
                              <ListItemAvatar>
                                <Avatar sx={{ fontSize: '1.2rem', bgcolor: '#fdd835', color: '#333' }}>
                                  {notif.icon}
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText
                                primary={
                                  <Typography variant="body2" sx={{ fontWeight: 500, color: '#333' }}>
                                    {notif.text}
                                  </Typography>
                                }
                                secondary={
                                  <Typography variant="caption" color="text.secondary">
                                    {notif.time}
                                  </Typography>
                                }
                              />
                            </ListItem>
                          ))}
                        </List>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </div>
            </ClickAwayListener>

            <div
              className="profile-icon"
              onClick={() => navigate('/profile')}
              style={{ cursor: 'pointer', marginLeft: '4px' }}
            />
          </div>
        </nav>
      </header>

      {/* APPOINTMENT MODAL */}
      <Modal open={appointmentOpen} onClose={() => setAppointmentOpen(false)}>
        <Box className="appointment-wrapper">
          <AppointmentForm
            onClose={() => setAppointmentOpen(false)}
            onSuccess={() => {
              setAppointmentOpen(false);
              navigate('/profile');
            }}
          />
        </Box>
      </Modal>
    </>
  );
};

export default Header;
