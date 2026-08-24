import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Gallery.css';

gsap.registerPlugin(ScrollTrigger);

const images = [
  'https://images.unsplash.com/photo-1600607688969-a5bfcd64bd28?q=80&w=2070&auto=format&fit=crop', // Living
  'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2057&auto=format&fit=crop', // Bedroom
  'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070&auto=format&fit=crop', // Bathroom
  'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop', // Kitchen
  'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop' // Workspace
];

const Gallery = () => {
  const sectionRef = useRef(null);
  const galleryRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = galleryRef.current.querySelectorAll('.gallery-item');
      
      items.forEach((item) => {
        gsap.fromTo(item,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
            }
          }
        );
        
        // Parallax image inner
        const img = item.querySelector('img');
        gsap.to(img, {
          yPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: item,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="gallery section-padding" ref={sectionRef}>
      <div className="section-header">
        <h2 className="section-title">Designed for Living</h2>
      </div>
      
      <div className="gallery-container" ref={galleryRef}>
        <div className="gallery-item item-1">
          <img src={images[0]} alt="Living Room" />
        </div>
        <div className="gallery-item item-2">
          <img src={images[1]} alt="Bedroom" />
        </div>
        <div className="gallery-item item-3">
          <img src={images[2]} alt="Bathroom" />
        </div>
        <div className="gallery-item item-4">
          <img src={images[3]} alt="Kitchen" />
        </div>
        <div className="gallery-item item-5">
          <img src={images[4]} alt="Workspace" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
