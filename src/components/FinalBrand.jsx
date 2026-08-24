import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './FinalBrand.css';

gsap.registerPlugin(ScrollTrigger);

const FinalBrand = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const lines = textRef.current.children;
      
      gsap.fromTo(lines,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 50%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="final-brand" ref={sectionRef}>
      <div className="final-bg" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop')` }}></div>
      <div className="final-overlay"></div>
      
      <div className="final-content">
        <h2 className="final-title" ref={textRef}>
          <div className="line-wrap"><span className="reveal-text">Stay</span> <span className="reveal-text">Different.</span></div>
          <div className="line-wrap"><span className="reveal-text">Stay</span> <span className="reveal-text">Kezoi.</span></div>
        </h2>
        <button className="btn-primary final-btn">Book Your Stay</button>
      </div>
    </section>
  );
};

export default FinalBrand;
