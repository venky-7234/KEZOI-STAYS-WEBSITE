import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './BrandStatement.css';

gsap.registerPlugin(ScrollTrigger);

const BrandStatement = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const lines = textRef.current.children;
      
      gsap.fromTo(lines,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="brand-statement section-padding" ref={sectionRef}>
      <div className="statement-container" ref={textRef}>
        <h2 className="statement-line">More private than a hotel.</h2>
        <h2 className="statement-line highlight">More refined than a rental.</h2>
        <h2 className="statement-line">Designed for the way you want to stay.</h2>
      </div>
    </section>
  );
};

export default BrandStatement;
