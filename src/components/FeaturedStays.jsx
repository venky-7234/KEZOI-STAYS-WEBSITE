import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import './FeaturedStays.css';

gsap.registerPlugin(ScrollTrigger);

const stays = [
  {
    id: 1,
    name: 'Kezoi One',
    location: 'HITEC City, Hyderabad',
    details: '3 BHK • Up to 6 Guests',
    price: 'From ₹8,999 / Night',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2067&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Kezoi Horizon',
    location: 'Gachibowli, Hyderabad',
    details: '2 BHK • Up to 4 Guests',
    price: 'From ₹6,499 / Night',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Kezoi Signature',
    location: 'Jubilee Hills, Hyderabad',
    details: '3 BHK • Up to 6 Guests',
    price: 'From ₹12,999 / Night',
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
        <h2 className="section-title">Featured Stays</h2>
        <a href="#all" className="view-all-link">View All Stays <ArrowRight size={18} /></a>
      </div>
      
      <div className="stays-list">
        {stays.map((stay, index) => (
          <div 
            key={stay.id} 
            className="stay-card"
            ref={el => cardsRef.current[index] = el}
          >
            <div className="stay-image-container">
              <img src={stay.image} alt={stay.name} className="stay-image" />
              <div className="stay-overlay">
                <button className="btn-outline view-stay-btn">View Stay</button>
              </div>
            </div>
            <div className="stay-info">
              <div className="stay-header">
                <h3 className="stay-name">{stay.name}</h3>
                <span className="stay-price">{stay.price}</span>
              </div>
              <p className="stay-location">{stay.location}</p>
              <p className="stay-details">{stay.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedStays;
