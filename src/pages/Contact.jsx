import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="section-padding" style={{ paddingTop: '150px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', color: 'var(--color-ivory)', marginBottom: '20px', textAlign: 'center' }}>Contact Us</h1>
        <p style={{ color: 'var(--color-grey)', fontSize: '1.2rem', textAlign: 'center', marginBottom: '60px' }}>
          Have a question or looking to book a long stay? Get in touch with our team.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '60px', '@media (minWidth: 768px)': { gridTemplateColumns: '1fr 1fr' } }}>
          {/* Contact Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <h2 style={{ fontSize: '2rem', color: 'var(--color-gold)', marginBottom: '10px' }}>Get in Touch</h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <Phone style={{ color: 'var(--color-gold)' }} />
              <p style={{ fontSize: '1.1rem', color: 'var(--color-ivory)' }}>+91 98765 43210</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <Mail style={{ color: 'var(--color-gold)' }} />
              <p style={{ fontSize: '1.1rem', color: 'var(--color-ivory)' }}>hello@kezoistays.com</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <MapPin style={{ color: 'var(--color-gold)' }} />
              <p style={{ fontSize: '1.1rem', color: 'var(--color-ivory)' }}>Hyderabad, Telangana</p>
            </div>
          </div>

          {/* Form Placeholder */}
          <div style={{ backgroundColor: 'rgba(255,255,255,0.02)', padding: '40px', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-ivory)', marginBottom: '20px' }}>Send an Enquiry</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input type="text" placeholder="Your Name" style={{ padding: '15px', backgroundColor: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '4px' }} />
              <input type="email" placeholder="Your Email" style={{ padding: '15px', backgroundColor: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '4px' }} />
              <textarea placeholder="Your Message" rows="4" style={{ padding: '15px', backgroundColor: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '4px' }}></textarea>
              <button className="btn-primary" style={{ marginTop: '10px' }}>Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
