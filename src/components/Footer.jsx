import React from 'react';
import { Link } from 'react-router-dom';
import logoUrl from '../assets/kezoi_logo-01.svg';
import './Footer.css';

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-svg-icon">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-svg-icon">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-svg-icon">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

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
            <h2 className="footer-tagline">KEZOI — A HOME. WITH A LIFE AROUND IT.</h2>
          </div>

          <div className="footer-links-grid">
            <div className="footer-col">
              <h4>Links</h4>
              <Link to="/about">Our Presence</Link>
              <Link to="/experiences">Experiences</Link>
              <Link to="/journal">Journal</Link>
              <Link to="/partner">Partner with us</Link>
            </div>

            <div className="footer-col">
              <h4>Legal</h4>
              <Link to="/privacy">Privacy</Link>
              <Link to="/terms">Terms</Link>
              <Link to="/cancellation">Cancellation Policy</Link>
              <Link to="/partner-terms">Partner Terms</Link>
            </div>

            <div className="footer-col">
              <h4>Social</h4>
              <div className="social-icons">
                <a href="https://www.instagram.com/kezoistays?igsi=MTE1Z2pmNWU4OW45dA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <InstagramIcon />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <YoutubeIcon />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <LinkedinIcon />
                </a>
              </div>
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
