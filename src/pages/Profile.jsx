import React from 'react';
import { Phone, Mail, Globe, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--color-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div style={{ maxWidth: '400px', width: '100%', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '24px', padding: '40px 20px', textAlign: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
        
        {/* Profile Image/Logo */}
        <div style={{ width: '100px', height: '100px', backgroundColor: 'var(--color-gold)', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{ color: 'var(--color-dark)', margin: 0, fontFamily: 'var(--font-heading)', fontSize: '2.5rem' }}>K</h1>
        </div>

        <h2 style={{ color: 'var(--color-ivory)', fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '5px' }}>Kezoi Stays</h2>
        <p style={{ color: 'var(--color-gold)', fontSize: '1rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '30px' }}>Premium Living</p>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <a href="tel:+919876543210" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '15px', backgroundColor: 'var(--color-gold)', color: 'var(--color-dark)', borderRadius: '12px', fontWeight: '500' }}>
            <Phone size={20} /> Call Us
          </a>
          <a href="mailto:hello@kezoistays.com" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '15px', backgroundColor: 'rgba(255,255,255,0.05)', color: 'var(--color-ivory)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}>
            <Mail size={20} /> Email Us
          </a>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '15px', backgroundColor: 'rgba(255,255,255,0.05)', color: 'var(--color-ivory)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}>
            <Globe size={20} /> Website
          </Link>
          <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '15px', backgroundColor: 'rgba(255,255,255,0.05)', color: 'var(--color-ivory)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}>
            <MapPin size={20} /> Locations
          </a>
        </div>
        
        <div style={{ marginTop: '40px' }}>
          <button style={{ background: 'none', border: 'none', color: 'var(--color-grey)', textDecoration: 'underline', cursor: 'pointer' }}>
            Save Contact (vCard)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
