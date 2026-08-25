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
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
            <img src="/logo.svg" alt="logo.svg" style={{ height: '70px', width: 'auto' }} />
          </Link>
        </div>
        <nav className="nav-links">
          <Link to="/about">About us</Link>
          <Link to="/properties">Properties</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/collaboration">Collaboration</Link>
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
