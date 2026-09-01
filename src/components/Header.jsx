import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoUrl from '../assets/kezoi_logo-01.svg';
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
          <Link to="/" style={{ textDecoration: 'none', display: 'block' }}>
            <img src={logoUrl} alt="Kezoi Stays" className="header-logo-img" />
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

        </nav>
        {/* Book a Stay CTA removed from here */}
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

        {/* Book a Stay CTA removed from mobile menu */}
      </div>
    </header>
  );
};

export default Header;
