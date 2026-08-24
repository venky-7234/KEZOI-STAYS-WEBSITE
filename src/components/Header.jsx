import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <h2>Kezoi <span>Stays</span></h2>
        </div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/stays">Stays</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/locations">Locations</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="header-cta">
          <Link to="/stays" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none' }}>Book a Stay</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
