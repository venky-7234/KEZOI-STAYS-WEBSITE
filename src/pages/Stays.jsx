import React from 'react';
import { Link } from 'react-router-dom';

const Stays = () => {
  return (
    <div className="section-padding" style={{ paddingTop: '150px' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ fontSize: '3rem', color: 'var(--color-ivory)', marginBottom: '20px' }}>Our Premium Stays</h1>
        <p style={{ color: 'var(--color-grey)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Explore our complete collection of luxury short-stay and serviced apartments across Hyderabad.
        </p>
      </div>
      
      {/* Temporary placeholder grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '40px', maxWidth: '1200px', margin: '0 auto' }}>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} style={{ backgroundColor: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '8px' }}>
            <div style={{ width: '100%', aspectRatio: '16/10', backgroundColor: 'rgba(255,255,255,0.05)', marginBottom: '20px', borderRadius: '4px' }}></div>
            <h3 style={{ color: 'var(--color-ivory)', marginBottom: '10px' }}>Kezoi Property {i}</h3>
            <p style={{ color: 'var(--color-grey)', marginBottom: '20px' }}>Premium 3 BHK in prime location.</p>
            <Link to={`/stay/property-${i}`} className="btn-outline" style={{ display: 'inline-block' }}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stays;
