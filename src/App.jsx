import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import Stays from './pages/Stays';
import StayDetails from './pages/StayDetails';
import Experience from './pages/Experience';
import Locations from './pages/Locations';
import About from './pages/About';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Legal from './pages/Legal';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="stays" element={<Stays />} />
          <Route path="stay/:slug" element={<StayDetails />} />
          <Route path="experience" element={<Experience />} />
          <Route path="locations" element={<Locations />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="profile" element={<Profile />} />
          <Route path="privacy" element={<Legal title="Privacy Policy" />} />
          <Route path="terms" element={<Legal title="Terms & Conditions" />} />
          <Route path="cancellation" element={<Legal title="Cancellation Policy" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
