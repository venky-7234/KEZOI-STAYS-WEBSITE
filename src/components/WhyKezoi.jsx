import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './WhyKezoi.css';

gsap.registerPlugin(ScrollTrigger);

const points = [
  {
    title: 'Curated Homes',
    desc: 'Only carefully selected premium properties.'
  },
  {
    title: 'Prime Locations',
    desc: 'Stay close to Hyderabad’s major business and lifestyle hubs.'
  },
  {
    title: 'Consistent Quality',
    desc: 'Every Kezoi stay follows the same high quality standards.'
  },
  {
    title: 'Designed for Living',
    desc: 'More space, more privacy and more comfort.'
  }
];

const WhyKezoi = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(itemsRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="why-kezoi section-padding" ref={sectionRef}>
      <div className="section-header">
        <h2 className="section-title">Why Kezoi</h2>
      </div>
      
      <div className="points-grid">
        {points.map((point, index) => (
          <div 
            key={index} 
            className="point-item"
            ref={el => itemsRef.current[index] = el}
          >
            <h3 className="point-title">{point.title}</h3>
            <p className="point-desc">{point.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyKezoi;
