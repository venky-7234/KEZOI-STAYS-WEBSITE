import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Move.css';

gsap.registerPlugin(ScrollTrigger);

const Move = () => {
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
      gsap.fromTo('.move-service-item',
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
      title: 'Cab',
      desc: 'Premium chauffeur-driven vehicles available on demand for your city commutes and meetings.'
    },
    {
      id: '02',
      title: 'Auto',
      desc: 'Experience the local flavor with our curated, reliable auto-rickshaw partners for short trips.'
    },
    {
      id: '03',
      title: 'Airport Transfer',
      desc: 'Seamless arrivals and departures with our scheduled, luxury airport transit service.'
    },
    {
      id: '04',
      title: 'Local Rides',
      desc: 'Explore hidden gems and neighborhoods with our expert local drivers who know the city inside out.'
    }
  ];

  return (
    <div className="move-page">
      {/* Hero Section */}
      <section className="move-hero" ref={heroRef}>

        <h1 className="move-headline">MOVE THROUGH THE CITY LIKE A LOCAL.</h1>
        <h2 className="move-headline" style={{fontSize: '2rem', marginTop: '15px', color: 'var(--color-gold)'}}>YOUR HOME IS ONLY THE BEGINNING.</h2>
      </section>

      {/* Services Section */}
      <section className="move-services" ref={servicesRef}>
        <div className="move-services-grid">
          {services.map(service => (
            <div className="move-service-item" key={service.id}>
              <span className="move-service-num">{service.id}</span>
              <h3 className="move-service-title">{service.title}</h3>
              <p className="move-service-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing Statement */}
      <section className="move-closing" ref={closingRef}>
        <h2 className="move-closing-text">ARRIVE WITHOUT WORRY.<br/>LEAVE WITHOUT ASKING.</h2>
        <Link to="/contact" className="move-cta-btn">EXPLORE KEZOI MOVE</Link>
      </section>
    </div>
  );
};

export default Move;
