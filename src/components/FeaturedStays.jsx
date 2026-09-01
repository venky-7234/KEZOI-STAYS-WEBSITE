import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import './FeaturedStays.css';

gsap.registerPlugin(ScrollTrigger);

const collections = [
  {
    id: 1,
    title: 'COLLECTION 01',
    name: 'Urban Penthouse Sanctuaries',
    desc: 'Skyline views, bespoke interiors, and central addresses for executive travel and high-end city escapes.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'COLLECTION 02',
    name: 'Private Coastal & Country Estates',
    desc: 'Expansive lawns, private pools, and tranquil settings crafted for multi-generational retreats and celebrations.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'COLLECTION 03',
    name: 'Curated Heritage Mansions',
    desc: 'Timeless architecture infused with state-of-the-art modern comforts, concierge services, and privacy.',
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop'
  }
];

const FeaturedStays = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(card,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="featured-stays section-padding" id="stays" ref={sectionRef}>
      <div className="section-header">
        <div className="header-text">
          <span className="section-eyebrow">FEATURED RESIDENCES: EXPLORE PLACES MADE FOR YOU</span>
          <h2 className="section-title">Find Your Kind of Stay</h2>
          <p className="section-desc">Handcrafted Private Estates & Luxury Suites</p>
        </div>
        <a href="/properties" className="view-all-link" style={{textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold'}}>View All Properties <ArrowRight size={18} /></a>
      </div>
      
      <div className="stays-list">
        {collections.map((collection, index) => (
          <div 
            key={collection.id} 
            className="stay-card"
            ref={el => cardsRef.current[index] = el}
          >
            <div className="stay-image-container">
              <img src={collection.image} alt={collection.name} className="stay-image" />
              <div className="stay-overlay">
                <button className="btn-outline view-stay-btn">Explore Collection</button>
              </div>
            </div>
            <div className="stay-info">
              <div className="stay-header" style={{flexDirection: 'column', alignItems: 'flex-start', marginBottom: '10px'}}>
                <span className="stay-price" style={{fontSize: '0.8rem', letterSpacing: '2px', color: 'var(--color-gold)', marginBottom: '5px'}}>{collection.title}</span>
                <h3 className="stay-name" style={{fontSize: '1.4rem'}}>{collection.name}</h3>
              </div>
              <p className="stay-location" style={{lineHeight: '1.6', color: 'var(--color-grey)'}}>{collection.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedStays;
