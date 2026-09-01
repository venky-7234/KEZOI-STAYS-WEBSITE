import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './WhyKezoi.css';

gsap.registerPlugin(ScrollTrigger);

const points = [
  {
    title: 'White-Glove Support',
    desc: 'Real-time human concierge available from enquiry to post-checkout. Zero automated friction.'
  },
  {
    title: 'Rigorous Standards',
    desc: '150-point quality audit covering pristine hygiene, premium linens, fast Wi-Fi, and security.'
  },
  {
    title: 'Fluid Hospitality',
    desc: 'Stays that adapt to your schedule with flexible check-ins, custom dining, and private transport.'
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
      <div className="section-header" style={{maxWidth: '800px'}}>
        <span className="section-eyebrow" style={{color: 'var(--color-gold)', letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '10px'}}>BRAND PILLARS</span>
        <h2 className="section-title" style={{marginBottom: '20px'}}>THE KEZOI WAY OF STAYING</h2>
        <p className="section-desc" style={{fontSize: '1.1rem', lineHeight: '1.6', color: 'var(--color-grey)'}}>
          Hospitality is not just about beautiful spaces; it is about absolute peace of mind. Every Kezoi stay is backed by a dedicated 24/7 personal concierge, ensuring every detail—from pre-arrival fridge stocking to tailored dining experiences—is executed flawlessly.
        </p>
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
