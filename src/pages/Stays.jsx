import React from 'react';
import { Link } from 'react-router-dom';
import BookingCTA from '../components/BookingCTA';

const Stays = () => {
  const collections = [
    {
      id: 1,
      title: 'The Urban Reserve',
      desc: 'Penthouse suites & architectural lofts in global financial capitals.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'The Coastal & Country Retreats',
      desc: 'Secluded coastal villas and restored country estates.',
      image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1974&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'The Heritage Collection',
      desc: 'Historically significant properties, modernized for absolute luxury.',
      image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=1984&auto=format&fit=crop'
    }
  ];

  return (
    <div style={{ paddingTop: '120px' }}>
      <div className="section-padding" style={{ textAlign: 'center', paddingBottom: '60px', maxWidth: '1000px', margin: '0 auto' }}>
        <span className="section-eyebrow" style={{color: 'var(--color-gold)', letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '15px'}}>THE COLLECTIONS</span>
        <h1 style={{ fontSize: '3.5rem', color: 'var(--color-ivory)', marginBottom: '20px', lineHeight: '1.2' }}>Portfolios of Distinction.</h1>
        <p style={{ color: 'var(--color-grey)', fontSize: '1.3rem', fontStyle: 'italic', letterSpacing: '1px' }}>
          Where architecture meets intuitive service.
        </p>
      </div>
      
      <div className="section-padding" style={{ maxWidth: '1200px', margin: '0 auto', paddingBottom: '100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
          {collections.map((collection) => (
            <div key={collection.id} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '100%', aspectRatio: '4/5', marginBottom: '20px', overflow: 'hidden', borderRadius: '4px' }}>
                <img 
                  src={collection.image} 
                  alt={collection.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                  onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <h3 style={{ color: 'var(--color-ivory)', marginBottom: '15px', fontSize: '1.6rem' }}>{collection.title}</h3>
              <p style={{ color: 'var(--color-grey)', marginBottom: '25px', lineHeight: '1.6', fontSize: '1.1rem' }}>{collection.desc}</p>
              <Link to="/contact" className="btn-outline" style={{ display: 'inline-block', width: 'fit-content', textDecoration: 'none' }}>Inquire</Link>
            </div>
          ))}
        </div>
      </div>
      <BookingCTA />
    </div>
  );
};

export default Stays;
