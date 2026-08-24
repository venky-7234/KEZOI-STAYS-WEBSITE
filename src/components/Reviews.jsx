import React, { useState, useEffect } from 'react';
import './Reviews.css';

const reviews = [
  {
    id: 1,
    text: "Beautiful apartment, extremely clean and much more comfortable than staying in a hotel.",
    author: "Sarah M.",
    rating: "★★★★★"
  },
  {
    id: 2,
    text: "The perfect corporate stay. High-speed wifi, quiet environment, and premium finishings everywhere.",
    author: "David K.",
    rating: "★★★★★"
  },
  {
    id: 3,
    text: "Exceeded all expectations. The seamless check-in and prime location made our trip effortless.",
    author: "Priya R.",
    rating: "★★★★★"
  }
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="reviews section-padding">
      <div className="reviews-container">
        <div className="quote-mark">"</div>
        <div className="reviews-slider">
          {reviews.map((review, index) => (
            <div 
              key={review.id} 
              className={`review-slide ${index === currentIndex ? 'active' : ''}`}
            >
              <h3 className="review-text">{review.text}</h3>
              <div className="review-meta">
                <span className="review-rating">{review.rating}</span>
                <span className="review-author">{review.author}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="slider-dots">
          {reviews.map((_, index) => (
            <button 
              key={index} 
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
