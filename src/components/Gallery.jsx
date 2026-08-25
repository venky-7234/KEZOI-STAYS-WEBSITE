import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BookOpen } from 'lucide-react';
import './Gallery.css';

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate header
      gsap.fromTo('.gallery-header-center',
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

      // Stagger cards in from the right
      gsap.fromTo(cardsRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gallery-carousel',
            start: 'top 85%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="gallery section-padding" ref={sectionRef}>
      <div className="gallery-header-center">
        <h2 className="section-title">Customer Gallery</h2>
        <p className="section-desc">A Glimpse Into The Kezoi Experience</p>
      </div>
      
      <div className="gallery-carousel">
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <div 
            key={index} 
            className="customer-card-placeholder"
            ref={el => cardsRef.current[index] = el}
          >
            <div className="read-badge">
              <BookOpen size={14} /> Read
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
