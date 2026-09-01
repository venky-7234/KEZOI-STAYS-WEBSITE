import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

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
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}>
            <h2>KEZOI</h2>
            <span>STAYS</span>
          </Link>
        </div>
        <nav className="nav-links">
          <Link to="/about">Our Presence</Link>
          <div className="nav-dropdown">
            <Link to="/experiences" className="nav-dropdown-trigger" style={{ textDecoration: 'none' }}>Experiences</Link>
            <div className="nav-dropdown-content">
              <Link to="/experiences/care">KEZOI CARE</Link>
              <Link to="/experiences/move">KEZOI MOVE</Link>
              <Link to="/experiences/table">KEZOI TABLE</Link>
            </div>
          </div>
          <Link to="/journal">Journal</Link>
          <Link to="/partner">Partner with us</Link>
          <Link to="/careers">Careers</Link>
        </nav>
        <div className="header-cta">
          <Link to="/stays" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none' }}>Book a Stay</Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        <Link to="/about" onClick={toggleMobileMenu}>Our Presence</Link>
        <div className="mobile-nav-group">
          <span className="mobile-nav-title">Experiences</span>
          <Link to="/experiences/care" onClick={toggleMobileMenu}>KEZOI CARE</Link>
          <Link to="/experiences/move" onClick={toggleMobileMenu}>KEZOI MOVE</Link>
          <Link to="/experiences/table" onClick={toggleMobileMenu}>KEZOI TABLE</Link>
        </div>
        <Link to="/journal" onClick={toggleMobileMenu}>Journal</Link>
        <Link to="/partner" onClick={toggleMobileMenu}>Partner with us</Link>
        <Link to="/careers" onClick={toggleMobileMenu}>Careers</Link>
        <Link to="/stays" className="btn-primary mobile-cta" onClick={toggleMobileMenu} style={{ textDecoration: 'none', textAlign: 'center', marginTop: '20px' }}>Book a Stay</Link>
      </div>
    </header>
  );
};

export default Header;
