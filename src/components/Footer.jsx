import React from 'react';
import { Link } from 'react-router-dom';
import logoUrl from '../assets/kezoi_logo-01.svg';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid-background"></div>
      <div className="footer-container section-padding">
        
        <div className="footer-top">
          <div className="footer-brand">
            <img 
              src={logoUrl} 
              alt="Kezoi Stays Logo" 
              className="footer-logo-img" 
            />
            <h2 className="footer-tagline">KEZOI — A HOME.<br/>WITH A LIFE AROUND IT.</h2>
          </div>

          <div className="footer-links-grid">
            <div className="footer-col">
              <h4>Links</h4>
              <Link to="/homes">Homes</Link>
              <Link to="/experiences">Experiences</Link>
              <Link to="/table">Table</Link>
              <Link to="/care">Care</Link>
              <Link to="/move">Move</Link>
              <Link to="/journal">Journal</Link>
              <Link to="/about">About</Link>
              <Link to="/partner">Partner With Us</Link>
              <Link to="/careers">Careers</Link>
              <Link to="/contact">Contact</Link>
            </div>

            <div className="footer-col">
              <h4>Social</h4>
              <a href="https://www.instagram.com/kezoistays?igsi=MTE1Z2pmNWU4OW45dA==" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="#" target="_blank" rel="noopener noreferrer">YouTube</a>
              <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>

            <div className="footer-col">
              <h4>Legal</h4>
              <Link to="/privacy">Privacy</Link>
              <Link to="/terms">Terms</Link>
              <Link to="/cancellation">Cancellation Policy</Link>
              <Link to="/partner-terms">Partner Terms</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; KEZOI STAYS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
