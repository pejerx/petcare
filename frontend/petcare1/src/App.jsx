// App.jsx
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Button, Backdrop, CircularProgress } from '@mui/material';
import Appointment from './pages/Appointment';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Shop from './pages/Shop'; 
//import AboutUs from './pages/AboutUs'; 

function Home() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  };

  const goToAppointment = () => {
    navigate('/appointment');
  };

  const goToLogin = () => {
    navigate('/login');
  };

  const goToShop = () => {
    navigate('/shop'); 

  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <ul className="nav-links">
            {['Services', 'About', 'Contact'].map((label) => (
              <li key={label}>
                <Button onClick={handleOpen} variant="text" color="inherit">
                  {label}
                </Button>
              </li>
            ))}
            <li>
              <Button onClick={goToShop} variant="text" color="inherit">Products</Button> 
            </li>
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
            <Button onClick={goToLogin} variant="outlined">Sign in</Button>
            <div className="profile-icon" onClick={() => navigate('/profile')} style={{ cursor: 'pointer' }} />
          </div>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Compassionate Care for Your<br />Furry Family</h1>
          <p>
            From grooming and wellness to boarding <br />
            and adoptions we offer everything your pet needs <br />
            under one roof.
          </p>
          <button className="book-now" onClick={goToAppointment}>Book Now</button>
        </div>
        <div className="hero-image" />
      </section>

      <section className="values">
        {[
          { icon: '❤️', title: 'Compassion First', text: 'We believe that every pet deserves to be treated like family...' },
          { icon: '💖', title: 'Wellness at Core', text: 'We take a holistic approach to pet care...' },
          { icon: '🤝', title: 'Respect & Integrity', text: 'Trust is everything. We build lasting bonds...' },
          { icon: '🌎', title: 'Community', text: 'We’re part of a vibrant, connected network...' }
        ].map((val, idx) => (
          <div className="value-box" key={idx}>
            <i>{val.icon}</i>
            <h3>{val.title}</h3>
            <p>{val.text}</p>
          </div>
        ))}
      </section>

      <footer className="footer">
        <div className="footer-brand">
          <h2><span className="brand-bold">Fetch</span>&<span className="brand-light">Fur</span></h2>
          <p>by FazCo</p>
        </div>
        <div className="footer-info">
          <p>Nuable St. Bonafide, Kal City, 4000 Cebu</p>
          <p>📞 1234-456-7890 | 📱 123-456-7890</p>
          <div className="social-icons">🌐 📘 🐦 📸</div>
        </div>
        <div className="footer-links">
          <a href="#">ABOUT US</a>
          <a href="#">CONTACT US</a>
          <a href="#">HELP</a>
          <a href="#">PRIVACY POLICY</a>
          <a href="#">FAQS</a>
        </div>
        <p className="copyright">
          Copyright © 2025 Fetch & Fur
        </p>
      </footer>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        {/*<Route path="/shop" element={<Shop />} />*/} 
      </Routes>
    </Router>
  );
}

export default App;
