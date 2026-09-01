import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Table.css';

gsap.registerPlugin(ScrollTrigger);

const Table = () => {
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
      gsap.fromTo('.table-service-item',
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
      title: 'Breakfast at Home',
      desc: 'Start your day with freshly brewed coffee and a curated morning spread from top local cafes.'
    },
    {
      id: '02',
      title: 'Local Lunch',
      desc: 'Authentic local cuisine delivered hot to your dining table to keep you fueled during the day.'
    },
    {
      id: '03',
      title: 'Family Dinner',
      desc: 'Generous, comforting meals designed for sharing with your loved ones around the Kezoi table.'
    },
    {
      id: '04',
      title: 'Late-Night Bites',
      desc: 'Cravings don\'t sleep. Access a curated menu of midnight snacks and comfort food.'
    },
    {
      id: '05',
      title: 'Chef Specials',
      desc: 'Gourmet dining experiences brought directly to your residence by our partner cloud kitchens.'
    },
    {
      id: '06',
      title: 'Local Favourites',
      desc: 'The best culinary secrets of the city, hand-picked and delivered without the wait.'
    }
  ];

  return (
    <div className="table-page">
      {/* Hero Section */}
      <section className="table-hero" ref={heroRef}>
        <span className="table-eyebrow">FOOD THAT FEELS LOCAL.</span>
        <h1 className="table-headline">THE BEST MEALS ARE OFTEN CLOSER THAN YOU THINK.</h1>
        <p className="table-subheadline">
          Kezoi Table connects guests with selected local food partners and cloud kitchens.
        </p>
      </section>

      {/* Services Section */}
      <section className="table-services" ref={servicesRef}>
        <div className="table-services-grid">
          {services.map(service => (
            <div className="table-service-item" key={service.id}>
              <span className="table-service-num">{service.id}</span>
              <h3 className="table-service-title">{service.title}</h3>
              <p className="table-service-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing Statement */}
      <section className="table-closing" ref={closingRef}>
        <h2 className="table-closing-text">EAT WELL, WITHOUT LEAVING HOME.</h2>
        <Link to="/contact" className="table-cta-btn">DISCOVER KEZOI TABLE</Link>
      </section>
    </div>
  );
};

export default Table;
