import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Hash } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section-padding">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="footer-logo">Kezoi <span>Stays</span></h2>
            <p className="footer-desc">
              Premium short-stay and serviced apartments in Hyderabad, designed for guests who value comfort, privacy and refined living.
            </p>
          </div>
          
          <div className="footer-links">
            <div className="footer-col">
              <h4>Contact</h4>
              <a href="tel:+919876543210"><Phone size={16}/> +91 98765 43210</a>
              <a href="mailto:hello@kezoistays.com"><Mail size={16}/> hello@kezoistays.com</a>
              <a href="#" className="social-link"><Hash size={16}/> @kezoistays</a>
            </div>
            
            <div className="footer-col">
              <h4>Legal</h4>
              <Link to="/terms">Terms & Conditions</Link>
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/cancellation">Cancellation Policy</Link>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Kezoi Stays. All rights reserved.</p>
          <p>Designed for Living.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
