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

      // Stagger cards in initially
      gsap.fromTo(cardsRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        }
      );

      // Horizontal scroll animation
      const carousel = document.querySelector('.gallery-carousel');
      
      // Use setTimeout to ensure DOM is fully rendered for accurate width calculation
      setTimeout(() => {
        const scrollWidth = carousel.scrollWidth;
        const amountToScroll = scrollWidth - window.innerWidth + (window.innerWidth * 0.1);

        if (amountToScroll > 0) {
          gsap.to(carousel, {
            x: -amountToScroll,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'center center',
              end: () => `+=${amountToScroll}`,
              pin: true,
              scrub: 1,
              invalidateOnRefresh: true
            }
          });
        }
      }, 100);
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

      <div className="gallery-footer">
        <p>Share your stay photos with us on Instagram <a href="https://instagram.com/kezoistays" target="_blank" rel="noopener noreferrer">@kezoistays</a></p>
      </div>
    </section>
  );
};

export default Gallery;
