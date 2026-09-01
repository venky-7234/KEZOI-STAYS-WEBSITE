import React from 'react';
import BookingCTA from '../components/BookingCTA';

const Gallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1974&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=1984&auto=format&fit=crop'
  ];

  return (
    <div style={{ paddingTop: '120px' }}>
      <div className="section-padding" style={{ textAlign: 'center', paddingBottom: '60px', maxWidth: '1000px', margin: '0 auto' }}>
        <span className="section-eyebrow" style={{color: 'var(--color-gold)', letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '15px'}}>THE VISUAL JOURNAL</span>
        <h1 style={{ fontSize: '3.5rem', color: 'var(--color-ivory)', marginBottom: '20px', lineHeight: '1.2' }}>A Glimpse into the Kezoi Experience.</h1>
      </div>
      
      <div className="section-padding" style={{ maxWidth: '1400px', margin: '0 auto', paddingBottom: '100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '20px' }}>
          {images.map((src, index) => (
            <div key={index} style={{ width: '100%', aspectRatio: '1/1', overflow: 'hidden' }}>
              <img 
                src={src} 
                alt={`Kezoi visual journal ${index + 1}`} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
          ))}
        </div>
      </div>
      <BookingCTA />
    </div>
  );
};

export default Gallery;
