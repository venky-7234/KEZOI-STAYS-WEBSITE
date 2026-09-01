import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Journal.css';

gsap.registerPlugin(ScrollTrigger);

const Journal = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // 1. Hero Reveal Animation
      gsap.fromTo('.journal-eyebrow', 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
      );
      
      // Animate title lines if they exist, or just the title
      gsap.fromTo('.journal-title',
        { y: 50, opacity: 0, clipPath: 'inset(100% 0% 0% 0%)' },
        { y: 0, opacity: 1, clipPath: 'inset(0% 0% 0% 0%)', duration: 1.2, ease: 'power4.out', delay: 0.4 }
      );

      // Hero background fade on scroll
      gsap.to('.journal-hero', {
        opacity: 0,
        y: 100,
        ease: 'none',
        scrollTrigger: {
          trigger: '.journal-hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      // 2. Parallax Grid Images
      gsap.utils.toArray('.journal-category-img').forEach((img) => {
        gsap.fromTo(img, 
          { y: '-15%' },
          {
            y: '15%',
            ease: 'none',
            scrollTrigger: {
              trigger: img.parentElement, // Trigger on the image wrapper
              start: 'top bottom',
              end: 'bottom top',
              scrub: true
            }
          }
        );
      });

      // Grid items fade up
      gsap.utils.toArray('.journal-category').forEach((item) => {
        gsap.fromTo(item,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
            }
          }
        );
      });

      // 3. Infinite Social Marquee
      // Moves left horizontally on scroll
      gsap.to('.marquee-inner', {
        xPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: '.journal-social-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1 // smooth scrubbing
        }
      });

      // 4. Newsletter Clip-Path Reveal
      gsap.fromTo('.newsletter-content-wrapper',
        { clipPath: 'inset(20% 5% 20% 5% round 10px)', scale: 0.9 },
        {
          clipPath: 'inset(0% 0% 0% 0% round 0px)',
          scale: 1,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: '.journal-newsletter-section',
            start: 'top 80%',
            end: 'center center',
            scrub: true
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const categories = [
    { name: 'Homes', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', size: 'large' },
    { name: 'People', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', size: 'portrait' },
    { name: 'Food', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', size: 'landscape' },
    { name: 'Cities', image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', size: 'portrait' },
    { name: 'Travel', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', size: 'large' },
    { name: 'Design', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', size: 'portrait' },
    { name: 'Kezoi Life', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', size: 'landscape' }
  ];

  return (
    <div className="journal-page" ref={containerRef}>
      {/* Hero Section */}
      <section className="journal-hero">
        <div className="journal-hero-content">
          <span className="journal-eyebrow">THE KEZOI JOURNAL</span>
          <h1 className="journal-title">LIFE AROUND<br/>THE HOME.</h1>
        </div>
      </section>

      {/* Asymmetrical Categories Grid */}
      <section className="journal-categories-section">
        <div className="journal-categories-grid">
          {categories.map((cat, index) => (
            <div className={`journal-category size-${cat.size}`} key={index}>
              <div className="journal-category-image-wrapper">
                <img src={cat.image} alt={cat.name} className="journal-category-img" />
              </div>
              <h3 className="journal-category-name">{cat.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Marquee Social CTA Section */}
      <section className="journal-social-section">
        <div className="marquee-container">
          <div className="marquee-inner">
            <div className="marquee-content">
              <span>FOLLOW THE LIFE AROUND KEZOI</span>
              <a href="#">INSTAGRAM</a>
              <a href="#">YOUTUBE</a>
              <a href="#">LINKEDIN</a>
              <a href="#">FACEBOOK</a>
            </div>
            {/* Duplicate for infinite effect */}
            <div className="marquee-content">
              <span>FOLLOW THE LIFE AROUND KEZOI</span>
              <a href="#">INSTAGRAM</a>
              <a href="#">YOUTUBE</a>
              <a href="#">LINKEDIN</a>
              <a href="#">FACEBOOK</a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="journal-newsletter-section">
        <div className="newsletter-content-wrapper">
          <div className="newsletter-content">
            <h2 className="newsletter-title">THE KEZOI LETTER</h2>
            <p className="newsletter-desc">Curated stories, design insights, and exclusive updates delivered straight to your inbox.</p>
            <a href="#" className="btn-primary newsletter-cta">JOIN THE KEZOI LETTER</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Journal;
