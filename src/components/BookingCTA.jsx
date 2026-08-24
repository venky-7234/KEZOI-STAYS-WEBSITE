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
    <section className="booking-cta section-padding" ref={sectionRef}>
      <div className="booking-cta-header">
        <h2 className="section-title">Your Next Stay Starts Here.</h2>
      </div>
      
      <div className="booking-bar">
        <div className="booking-field">
          <label>Location</label>
          <input type="text" placeholder="Where do you want to stay?" />
        </div>
        <div className="booking-field divider">
          <label>Check-In</label>
          <input type="text" placeholder="Add dates" />
        </div>
        <div className="booking-field divider">
          <label>Check-Out</label>
          <input type="text" placeholder="Add dates" />
        </div>
        <div className="booking-field divider">
          <label>Guests</label>
          <input type="text" placeholder="Add guests" />
        </div>
        <button className="search-btn">
          <Search size={20} />
          <span>Search</span>
        </button>
      </div>
    </section>
  );
};

export default BookingCTA;
