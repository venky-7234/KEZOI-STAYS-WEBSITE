import React from 'react';
import './LongStay.css';

const LongStay = () => {
  return (
    <section className="long-stay section-padding">
      <div className="long-stay-container">
        <span className="section-eyebrow" style={{color: 'var(--color-gold)', letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '10px', fontSize: '0.9rem', fontWeight: 'bold'}}>PARTNER WITH KEZOI</span>
        <h2 className="long-stay-heading" style={{fontSize: '2.5rem', marginBottom: '20px'}}>Unlock the True Yield of Your Luxury Real Estate</h2>
        <p className="long-stay-desc" style={{fontSize: '1.1rem', color: 'var(--color-grey)', lineHeight: '1.6'}}>
          We transform premier properties into high-performing, impeccably maintained luxury stays. Turnkey operations, algorithmic yield management, and global exposure.
        </p>
        <div className="long-stay-buttons">
          <a href="/collaboration" className="btn-primary" style={{display: 'inline-block', textDecoration: 'none'}}>BECOME A PARTNER &rarr;</a>
        </div>
      </div>
    </section>
  );
};

export default LongStay;
