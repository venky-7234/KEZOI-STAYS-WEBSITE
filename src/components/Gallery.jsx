import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BookOpen } from 'lucide-react';
import './Gallery.css';

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    let timeoutId;
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
      timeoutId = setTimeout(() => {
        ctx.add(() => {
          const scrollWidth = carousel.scrollWidth;
          const amountToScroll = scrollWidth - window.innerWidth + (window.innerWidth * 0.1);

          if (amountToScroll > 0) {
            gsap.to(carousel, {
              x: -amountToScroll,
              ease: 'none',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top top',
                end: () => `+=${amountToScroll}`,
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true
              }
            });
          }
        });
      }, 100);
    }, sectionRef);

    return () => {
      clearTimeout(timeoutId);
      ctx.revert();
    };
  }, []);

  return (
    <>
      <section className="gallery section-padding" ref={sectionRef} style={{ minHeight: 'auto', paddingTop: '0px', paddingBottom: '20px' }}>
        <div className="gallery-header-center" style={{ marginBottom: '20px' }}>
          <h2 className="section-title">A Glimpse Into The Kezoi Experience</h2>
          <p className="section-desc" style={{fontSize: '1.1rem', color: 'var(--color-grey)', marginTop: '5px'}}>Architectural detail, serene ambiance, and moments of unhurried luxury.</p>
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

      {/* Put CTA in a separate section so it isn't hidden by the ScrollTrigger pin */}
      <div className="gallery-cta-section" style={{ backgroundColor: 'var(--color-ivory)', paddingBottom: '20px', textAlign: 'center' }}>
        <a href="/gallery" className="btn-primary" style={{display: 'inline-block', textDecoration: 'none'}}>Explore The Visual Journal</a>
      </div>
    </>
  );
};

export default Gallery;
