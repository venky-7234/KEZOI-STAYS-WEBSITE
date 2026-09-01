import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Care.css';

gsap.registerPlugin(ScrollTrigger);

const Care = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const closingRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.fromTo(heroRef.current.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' }
      );

      // Services Animation
      gsap.fromTo('.care-service-item',
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.15, 
          ease: 'power2.out',
          scrollTrigger: {
            trigger: servicesRef.current,
            start: 'top 75%',
          }
        }
      );

      // Closing Animation
      gsap.fromTo(closingRef.current.children,
        { y: 40, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.2, 
          ease: 'power2.out',
          scrollTrigger: {
            trigger: closingRef.current,
            start: 'top 80%',
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const services = [
    {
      id: '01',
      title: 'Laundry',
      desc: 'Same-day premium laundry and dry-cleaning services picked up and delivered right to your wardrobe.'
    },
    {
      id: '02',
      title: 'House Care',
      desc: 'Discreet, hotel-standard housekeeping tailored to your schedule to ensure your home is always immaculate.'
    },
    {
      id: '03',
      title: 'Essentials',
      desc: 'Pantry stocking, premium toiletries replenishment, and fresh linens provided on demand.'
    },
    {
      id: '04',
      title: 'Special Requests',
      desc: 'From arranging a private chef to setting up a home office—our team fulfills your bespoke lifestyle needs.'
    }
  ];

  return (
    <div className="care-page">
      {/* Hero Section */}
      <section className="care-hero" ref={heroRef}>
        <span className="care-eyebrow">HOSPITALITY THAT TAKES CARE OF THE DETAILS.</span>
        <h1 className="care-headline">A HOME SHOULD TAKE CARE OF YOU.</h1>
      </section>

      {/* Services Section */}
      <section className="care-services" ref={servicesRef}>
        <div className="care-services-grid">
          {services.map(service => (
            <div className="care-service-item" key={service.id}>
              <span className="care-service-num">{service.id}</span>
              <h3 className="care-service-title">{service.title}</h3>
              <p className="care-service-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing Statement */}
      <section className="care-closing" ref={closingRef}>
        <h2 className="care-closing-text">YOUR HOME HAS A TEAM.</h2>
        <Link to="/contact" className="care-cta-btn">DISCOVER KEZOI CARE</Link>
      </section>
    </div>
  );
};

export default Care;
