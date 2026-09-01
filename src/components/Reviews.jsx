import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';
import './Reviews.css';

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    id: 1,
    text: "“We reserved a Kezoi estate for an intimate milestone celebration. The privacy, immaculate detailing, and seamless service meant we could simply focus on enjoying time together. It surpassed every five-star hotel experience we’ve had.”",
    author: "VICTORIA S., EXECUTIVE VICE PRESIDENT (LONDON)"
  },
  {
    id: 2,
    text: "“Effortless from start to finish. Having a dedicated human contact meant every request was handled instantly. Kezoi has become our non-negotiable choice for city stays.”",
    author: "MARCUS CHEN, TECH FOUNDER (SINGAPORE)"
  }
];

const Reviews = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate header
      gsap.fromTo('.reviews-header',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          }
        }
      );

      // Stagger cards
      gsap.fromTo(cardsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.reviews-grid',
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="reviews section-padding" ref={sectionRef}>
      <div className="reviews-header" style={{maxWidth: '800px', margin: '0 auto 60px'}}>
        <span className="section-eyebrow" style={{color: 'var(--color-gold)', letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '10px'}}>GUEST TESTIMONIALS</span>
        <h2 className="section-title">Stories From Our Guests</h2>
      </div>
      
      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div 
            key={review.id} 
            className="review-card"
            ref={el => cardsRef.current[index] = el}
          >
            <Quote className="quote-icon" size={32} />
            <p className="review-card-text" style={{fontStyle: 'italic'}}>{review.text}</p>
            <span className="review-author" style={{marginTop: 'auto', fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--color-gold)', letterSpacing: '1px'}}>{review.author}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
