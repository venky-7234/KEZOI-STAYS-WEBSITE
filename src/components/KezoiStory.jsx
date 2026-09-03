import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './KezoiStory.css';

gsap.registerPlugin(ScrollTrigger);

const KezoiStory = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.story-card', 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.2, 
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.story-grid',
            start: 'top 85%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="kezoi-story-section" ref={sectionRef}>
      <div className="kezoi-story-header">
        <span className="story-eyebrow">THE KEZOI STORY</span>
        <h2 className="story-title">THE PEOPLE BEHIND THE EXPERIENCE.</h2>
      </div>
      
      <div className="story-grid">
        {[
          { title: 'The Table Partner', image: '/table_partner.jpg' },
          { title: 'The Care Partner', image: '/care_partner.jpg' },
          { title: 'The Move Partner', image: '/move_partner_v2.jpg' }
        ].map((person, index) => (
          <div className="story-card" key={index}>
            <div className="story-card-image-container">
              <div 
                className="story-card-image"
                style={{ backgroundImage: `url('${person.image}')` }}
              ></div>
            </div>
            <h3 className="story-card-title">{person.title}</h3>
          </div>
        ))}
      </div>

      <div className="story-closing">
        <h2 className="story-closing-text">
          KEZOI IS BUILT BY PEOPLE.<br/>
          <span className="story-sub-text">Homes. Cooks. Drivers. Care teams. Creators. Guests.</span><br/>
          <span className="story-highlight">A local ecosystem connected around one place: YOUR HOME.</span>
        </h2>
      </div>
    </section>
  );
};

export default KezoiStory;
