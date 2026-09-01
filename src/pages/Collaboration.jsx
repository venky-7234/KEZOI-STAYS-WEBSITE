import React from 'react';
import BookingCTA from '../components/BookingCTA';

const Collaboration = () => {
  const advantages = [
    {
      title: 'Algorithmic Yield Optimization',
      desc: 'Dynamic pricing algorithms ensuring peak occupancy at premium rates.'
    },
    {
      title: 'Institutional Maintenance',
      desc: 'Weekly deep cleans, preventative maintenance, and 24/7 technical response.'
    },
    {
      title: 'Vetted Clientele',
      desc: 'Rigorous guest screening ensuring your property is respected by high-caliber individuals.'
    }
  ];

  return (
    <div style={{ paddingTop: '120px' }}>
      <div className="section-padding" style={{ textAlign: 'center', paddingBottom: '60px', maxWidth: '1000px', margin: '0 auto' }}>
        <span className="section-eyebrow" style={{color: 'var(--color-gold)', letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '15px'}}>PROPERTY ACQUISITION & PARTNERSHIPS</span>
        <h1 style={{ fontSize: '3.5rem', color: 'var(--color-ivory)', marginBottom: '20px', lineHeight: '1.2' }}>Elevate Your Asset. Maximize Your Yield.</h1>
        <p style={{ color: 'var(--color-grey)', fontSize: '1.3rem', fontStyle: 'italic', letterSpacing: '1px' }}>
          We partner with owners of exceptional real estate to deliver turnkey management, institutional upkeep, and superior financial returns.
        </p>
      </div>
      
      <div className="section-padding" style={{ maxWidth: '1000px', margin: '0 auto', paddingBottom: '100px' }}>
        <h2 style={{ fontSize: '2rem', color: 'var(--color-ivory)', marginBottom: '40px', textAlign: 'center' }}>The Kezoi Partnership Advantage</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '60px' }}>
          {advantages.map((adv, index) => (
            <div key={index} style={{ backgroundColor: 'var(--color-white)', padding: '30px', borderRadius: '8px', color: 'var(--color-dark)' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '15px' }}>{index + 1}. {adv.title}</h3>
              <p style={{ color: 'var(--color-grey)', lineHeight: '1.6' }}>{adv.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <button className="btn-primary" style={{ padding: '15px 40px', fontSize: '1.1rem', backgroundColor: 'var(--color-gold)', color: 'var(--color-dark)', border: 'none', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer' }}>
            REQUEST A PROPERTY VALUATION
          </button>
        </div>
      </div>
      <BookingCTA />
    </div>
  );
};

export default Collaboration;
