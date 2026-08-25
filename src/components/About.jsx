import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image reveal
      gsap.fromTo(imageRef.current,
        { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)', scale: 1.1 },
        {
          clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)',
          scale: 1,
          duration: 1.5,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        }
      );

      // Text fade up
      gsap.fromTo(textRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about section-padding" id="about" ref={sectionRef}>
      <div className="about-container">
        <div className="about-text" ref={textRef}>
          <h2 className="about-heading">Why Settle for Ordinary When You Can Stay Better?</h2>
          <p className="about-desc">
            Kezoi Stays brings you thoughtfully selected spaces designed for comfort, relaxation and unforgettable moments. From city escapes to peaceful retreats, every stay is created to feel special.
          </p>
        </div>
        <div className="about-image-wrapper">
          <img 
            ref={imageRef}
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2064&auto=format&fit=crop" 
            alt="Premium Interior" 
            className="about-image"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
