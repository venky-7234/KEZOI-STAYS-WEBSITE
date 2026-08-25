import React from 'react';
import { Calendar, Users, PhoneCall, Building, ChevronDown } from 'lucide-react';
import './BookingBar.css';

const BookingBar = () => {
  return (
    <div className="booking-bar-container">
      <div className="booking-bar-main">
        
        <div className="booking-field">
          <Building className="booking-icon" />
          <div className="booking-info">
            <span className="booking-label">Property</span>
            <span className="booking-value" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              Select your Preferred Hotel <ChevronDown size={16} />
            </span>
          </div>
        </div>
        
        <div className="booking-divider"></div>

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
        
        <div className="booking-actions">
          <button className="callback-btn-compact">
            <PhoneCall size={16} />
            Callback
          </button>
          <button className="booking-btn">Check Availability</button>
        </div>
      </div>
    </div>
  );
};

export default BookingBar;
