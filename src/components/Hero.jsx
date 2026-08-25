import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background slow zoom
      gsap.to(bgRef.current, {
        scale: 1.1,
        duration: 20,
        ease: 'none',
        repeat: -1,
        yoyo: true
      });

      // Text reveal
      const chars = textRef.current.querySelectorAll('.reveal-text');
      
      gsap.fromTo(chars, 
        { y: 100, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.2, 
          stagger: 0.1, 
          ease: 'power4.out',
          delay: 0.5
        }
      );

      gsap.fromTo('.hero-sub',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 1.2, ease: 'power3.out' }
      );

      gsap.fromTo('.hero-buttons',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 1.4, ease: 'power3.out' }
      );
      
      gsap.fromTo('.scroll-indicator',
        { opacity: 0 },
        { opacity: 1, duration: 1, delay: 2, ease: 'power2.inOut' }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={heroRef} id="home">
      <div 
        className="hero-bg" 
        ref={bgRef}
        style={{ backgroundImage: `url('https://unsplash.com/photos/white-and-brown-concrete-building-under-blue-sky-during-daytime-_TPTXZd9mOo')` }}
      ></div>
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <img 
          src="/logo.svg"  
          style={{ height: '80px', width: 'auto', marginBottom: '30px', marginInline: 'auto' }} 
        />
        <h1 ref={textRef} className="hero-title">
          <div className="line-wrap">
            <span className="reveal-text">Your</span> <span className="reveal-text">Next</span> <span className="reveal-text">Memorable</span> <span className="reveal-text">Stay</span>
          </div>
          <div className="line-wrap">
            <span className="reveal-text">Begins</span> <span className="reveal-text">at</span> <span className="reveal-text">Kezoi.</span>
          </div>
        </h1>
        <p className="hero-sub">
          The Art of Refined Living Starts at Kezoi.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Explore Stays</button>
          <button className="btn-outline">Book Now</button>
        </div>
      </div>

      
    </section>
  );
};

export default Hero;
