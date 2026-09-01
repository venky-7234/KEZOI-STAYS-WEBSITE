import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import './Locations.css';

gsap.registerPlugin(ScrollTrigger);

const locations = [
  {
    id: 1,
    name: 'Madhapur',
    desc: 'The heart of the IT corridor.',
    image: 'https://images.unsplash.com/photo-1542314831-c5a4d407e06a?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'HITEC City',
    desc: 'Premium living near major tech parks.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Gachibowli',
    desc: 'Quiet, upscale, and well-connected.',
    image: 'https://images.unsplash.com/photo-1577002636224-17c3855baad3?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Financial District',
    desc: 'Luxury stays for business leaders.',
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 5,
    name: 'Jubilee Hills',
    desc: 'The most exclusive addresses in town.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop'
  }
];

const Locations = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useLayoutEffect(() => {
    // Determine if it's desktop view for horizontal scroll
    const isDesktop = window.innerWidth >= 1024;
    
    if (isDesktop && containerRef.current && scrollRef.current) {
      const ctx = gsap.context(() => {
        const totalWidth = scrollRef.current.scrollWidth - window.innerWidth + 200; // rough calculation
        
        gsap.to(scrollRef.current, {
          x: -totalWidth,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 1,
            start: 'top top',
            end: () => `+=${totalWidth}`,
            invalidateOnRefresh: true
          }
        });
      }, containerRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section className="locations section-padding" id="locations" ref={containerRef}>
      <div className="section-header">
        <h2 className="section-title">Prime Locations</h2>
        <p className="locations-subtitle">Stay close to where you need to be.</p>
      </div>
      
      <div className="locations-scroll-container" ref={scrollRef}>
        <div className="locations-wrapper">
          {locations.map((loc) => (
            <div key={loc.id} className="location-card">
              <div className="location-image-container">
                <img src={loc.image} alt={loc.name} className="location-image" />
                <div className="location-overlay"></div>
              </div>
              <div className="location-info">
                <h3 className="location-name">{loc.name}</h3>
                <p className="location-desc">{loc.desc}</p>
                <button className="explore-btn">Explore <ArrowRight size={16} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
