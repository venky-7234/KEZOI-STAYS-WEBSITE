import React from 'react';
import { Calendar, Users, PhoneCall } from 'lucide-react';
import './BookingBar.css';

const BookingBar = () => {
  return (
    <div className="booking-bar-container">
      <div className="booking-bar-main">
        <div className="booking-field">
          <Calendar className="booking-icon" />
          <div className="booking-info">
            <span className="booking-label">Check In</span>
            <span className="booking-value">Select Date</span>
          </div>
        </div>
        
        <div className="booking-divider"></div>
        
        <div className="booking-field">
          <Calendar className="booking-icon" />
          <div className="booking-info">
            <span className="booking-label">Check Out</span>
            <span className="booking-value">Select Date</span>
          </div>
        </div>
        
        <div className="booking-divider"></div>
        
        <div className="booking-field">
          <Users className="booking-icon" />
          <div className="booking-info">
            <span className="booking-label">Guests</span>
            <span className="booking-value">1 Adult, 0 Child</span>
          </div>
        </div>
        
        <button className="booking-btn">Check Availability</button>
      </div>

      <div className="booking-banner">
        <p>Finding your ideal vacation spot should be easy, we're here to help!</p>
        <button className="callback-btn">
          <PhoneCall size={18} />
          Request Callback
        </button>
      </div>
    </div>
  );
};

export default BookingBar;
