import React from 'react';
import { Phone, Mail } from 'lucide-react';
import BookingCTA from '../components/BookingCTA';

const Contact = () => {
  return (
    <div style={{ paddingTop: '120px' }}>
      <div className="section-padding" style={{ textAlign: 'center', paddingBottom: '60px', maxWidth: '1000px', margin: '0 auto' }}>
        <span className="section-eyebrow" style={{color: 'var(--color-gold)', letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '15px'}}>CONNECT & CONCIERGE</span>
        <h1 style={{ fontSize: '3.5rem', color: 'var(--color-ivory)', marginBottom: '20px', lineHeight: '1.2' }}>At Your Service.</h1>
      </div>
      
      <div className="section-padding" style={{ maxWidth: '1000px', margin: '0 auto', paddingBottom: '100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          
          <div style={{ backgroundColor: 'var(--color-white)', padding: '40px', borderRadius: '12px', color: 'var(--color-dark)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--color-dark)' }}>General Reservations</h3>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '15px', color: 'var(--color-grey)' }}>
              <Mail size={18} />
              <span>reserve@kezoistays.com</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', color: 'var(--color-grey)' }}>
              <Phone size={18} />
              <span>+91 98765 43210</span>
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--color-white)', padding: '40px', borderRadius: '12px', color: 'var(--color-dark)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--color-dark)' }}>Property Partnerships</h3>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '15px', color: 'var(--color-grey)' }}>
              <Mail size={18} />
              <span>partners@kezoistays.com</span>
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--color-white)', padding: '40px', borderRadius: '12px', color: 'var(--color-dark)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--color-dark)' }}>Press & Media</h3>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '15px', color: 'var(--color-grey)' }}>
              <Mail size={18} />
              <span>press@kezoistays.com</span>
            </div>
          </div>

        </div>
      </div>
      <BookingCTA />
    </div>
  );
};

export default Contact;
