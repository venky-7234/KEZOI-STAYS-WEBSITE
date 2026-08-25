import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';
import './Reviews.css';

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    id: 1,
    text: "We booked Kezoi for a small celebration, and it turned out to be the perfect choice. We had the space to ourselves, everything felt comfortable, and we could actually enjoy the time together without rushing anywhere."
  },
  {
    id: 2,
    text: "The place was so comfortable, it honestly felt like we had our own little space in the city. Everything was easy, and we didn't have to worry about a thing."
  },
  {
    id: 3,
    text: "What I liked most was how effortless the whole stay felt. The space was beautiful, comfortable, and exactly what we needed after a long day."
  },
  {
    id: 4,
    text: "It didn't feel like we were just staying somewhere. It felt like we had a place of our own for a few days. That made the whole trip better."
  },
  {
    id: 5,
    text: "We weren't really looking for anything fancy. We just wanted a good place to hang out, talk for hours, eat, laugh, and do nothing for a while. It felt like our own little space for the weekend."
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
      <div className="reviews-header">
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
            <p className="review-card-text">{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
