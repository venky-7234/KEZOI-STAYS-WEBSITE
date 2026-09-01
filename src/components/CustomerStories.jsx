import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play } from 'lucide-react';
import './CustomerStories.css';

gsap.registerPlugin(ScrollTrigger);

const CustomerStories = () => {
  const sectionRef = useRef(null);
  const elementsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(elementsRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
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

  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return (
    <section className="customer-stories" ref={sectionRef}>
      <div className="customer-stories-content">
        <span className="customer-stories-eyebrow" ref={addToRefs}>CUSTOMER STORIES</span>
        <h2 className="customer-stories-title" ref={addToRefs}>HEAR IT FROM THE PEOPLE WHO STAYED.</h2>
        <p className="customer-stories-desc" ref={addToRefs}>SOME EXPERIENCES ARE BETTER HEARD THAN EXPLAINED.</p>

        <div className="video-thumbnail-container" ref={addToRefs}>
          <img 
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Customer Testimonial Documentary" 
            className="video-thumbnail"
          />
          <div className="play-button-overlay">
            <div className="play-button">
              <Play size={32} fill="currentColor" />
            </div>
          </div>
        </div>

        <div className="customer-stories-cta-wrapper" ref={addToRefs}>
          <Link to="/experiences/care" className="btn-primary customer-cta">
            FIND YOUR KEZOI HOME
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CustomerStories;
