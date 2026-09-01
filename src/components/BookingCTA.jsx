import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search } from 'lucide-react';
import './BookingCTA.css';

gsap.registerPlugin(ScrollTrigger);

const BookingCTA = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.booking-bar',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="booking-cta section-padding" ref={sectionRef} style={{textAlign: 'center', backgroundColor: 'var(--color-dark)', color: 'var(--color-ivory)'}}>
      <div className="booking-cta-header" style={{maxWidth: '800px', margin: '0 auto'}}>
        <h2 className="section-title" style={{color: 'var(--color-ivory)', marginBottom: '20px', fontSize: '2.5rem'}}>Your next extraordinary escape awaits.</h2>
        <p style={{fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', marginBottom: '40px', lineHeight: '1.6'}}>
          Book direct for exclusive privileges and signature conciergeries.
        </p>
        <button className="btn-primary" style={{backgroundColor: 'var(--color-gold)', color: 'var(--color-dark)', padding: '15px 40px', fontSize: '1.1rem', borderRadius: '50px', border: 'none', cursor: 'pointer', fontWeight: 'bold'}}>
          RESERVE YOUR STAY
        </button>
      </div>
    </section>
  );
};

export default BookingCTA;
