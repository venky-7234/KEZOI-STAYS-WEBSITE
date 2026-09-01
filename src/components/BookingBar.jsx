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
            <span className="booking-label">Destination / City</span>
            <span className="booking-value" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              Select Location <ChevronDown size={16} />
            </span>
          </div>
        </div>
        
        <div className="booking-divider"></div>

        <div className="booking-field">
          <Calendar className="booking-icon" />
          <div className="booking-info">
            <span className="booking-label">Dates</span>
            <span className="booking-value">Check-in / Check-out</span>
          </div>
        </div>
        
        <div className="booking-divider"></div>
        
        <div className="booking-field">
          <Users className="booking-icon" />
          <div className="booking-info">
            <span className="booking-label">Guests / Suite Count</span>
            <span className="booking-value">Add Guests</span>
          </div>
        </div>
        
        <div className="booking-divider"></div>
        
        <div className="booking-field">
          <PhoneCall className="booking-icon" />
          <div className="booking-info">
            <span className="booking-label">Experience Type</span>
            <span className="booking-value" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              Leisure <ChevronDown size={16} />
            </span>
          </div>
        </div>
        
        <div className="booking-actions">
          <button className="booking-btn">Search Availability</button>
        </div>
      </div>
    </div>
  );
};

export default BookingBar;
