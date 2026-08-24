import React from 'react';

const Legal = ({ title }) => {
  return (
    <div className="section-padding" style={{ paddingTop: '150px', backgroundColor: 'var(--color-dark)' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', color: 'var(--color-ivory)', marginBottom: '40px' }}>{title}</h1>
        
        <div style={{ color: 'var(--color-grey)', fontSize: '1.1rem', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <p>
            Welcome to Kezoi Stays. These terms govern your use of our website and services. 
            By accessing or using our platform, you agree to be bound by these terms.
          </p>
          
          <h3 style={{ color: 'var(--color-ivory)', marginTop: '20px' }}>1. General Provisions</h3>
          <p>
            Kezoi Stays provides premium short-stay and serviced apartments. All bookings are subject to availability and confirmation.
          </p>

          <h3 style={{ color: 'var(--color-ivory)', marginTop: '20px' }}>2. User Responsibilities</h3>
          <p>
            Guests are expected to treat properties with respect and adhere to house rules provided during check-in. Any damages may incur additional charges.
          </p>

          <h3 style={{ color: 'var(--color-ivory)', marginTop: '20px' }}>3. Modifications</h3>
          <p>
            We reserve the right to update or modify these terms at any time without prior notice. Continued use of our services constitutes acceptance of the new terms.
          </p>
          
          <p style={{ marginTop: '40px', fontStyle: 'italic', fontSize: '0.9rem' }}>
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Legal;
