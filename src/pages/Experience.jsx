import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ExperienceSection from '../components/Experience';
import './Experience.css';

const Experience = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All', 'Eat', 'Explore', 'Rest', 'Create', 'Connect', 'Discover'];

  const experiences = [
    {
      id: 1,
      category: 'Explore',
      title: 'Old City Heritage Walk',
      story: 'Discover the hidden secrets and timeless architecture of the old city with a local historian.',
      duration: '3 Hours',
      location: 'Hyderabad',
      price: 'From $45',
      availability: 'Daily',
      image: 'https://images.unsplash.com/photo-1590050752117-238cb123e4fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      category: 'Eat',
      title: 'Culinary Masterclass',
      story: 'Learn to cook authentic regional dishes with a renowned local chef in their private kitchen.',
      duration: '4 Hours',
      location: 'Hyderabad',
      price: 'From $80',
      availability: 'Weekends',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      category: 'Rest',
      title: 'Urban Wellness Retreat',
      story: 'Unwind with a curated day of spa treatments, yoga, and mindful relaxation in a serene setting.',
      duration: 'Full Day',
      location: 'Hyderabad',
      price: 'From $150',
      availability: 'On Request',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const filteredExperiences = activeCategory === 'All' 
    ? experiences 
    : experiences.filter(exp => exp.category === activeCategory);

  return (
    <div className="experience-page">
      {/* Live More Hero Section */}
      <section className="exp-hero">
        <span className="exp-hero-eyebrow">LIVE MORE THAN THE HOME.</span>
        <h1 className="exp-hero-headline">DON'T VISIT A CITY.<br/>LIVE A LITTLE OF IT.</h1>
      </section>



      {/* Experience Grid */}
      <section className="exp-grid-section">
        <div className="exp-grid">
          {filteredExperiences.map(exp => (
            <div className="exp-card placeholder-card" key={exp.id} style={{ minHeight: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed rgba(212, 175, 55, 0.3)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
              <span style={{ color: 'var(--color-gold)', opacity: 0.5, letterSpacing: '2px', fontSize: '0.9rem' }}>IMAGE PLACEHOLDER</span>
            </div>
          ))}
        </div>
      </section>

      {/* Existing Experience Links (Care, Move, Table) */}
      <div style={{ paddingTop: '50px' }}>
        <ExperienceSection />
      </div>

      {/* People Section */}
      <section className="people-section" style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', marginBottom: '50px', color: 'var(--color-gold)' }}>THE PEOPLE BEHIND THE EXPERIENCE.</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
          {['The Homeowner', 'The Cook', 'The Care Partner', 'The Driver', 'The Guest'].map((person, index) => (
            <div key={index} style={{
              background: 'rgba(246, 245, 240, 0.05)',
              border: '1px solid rgba(246, 245, 240, 0.1)',
              padding: '30px 40px',
              borderRadius: '8px',
              minWidth: '200px'
            }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', margin: '0', color: 'var(--color-ivory)' }}>{person}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Closing Statement */}
      <section style={{ padding: '100px 20px', textAlign: 'center', backgroundColor: 'rgba(246, 245, 240, 0.02)' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', maxWidth: '900px', margin: '0 auto', lineHeight: '1.4', fontWeight: '400', color: 'var(--color-ivory)' }}>
          KEZOI IS BUILT BY PEOPLE.<br/>
          Homes. Cooks. Drivers. Care teams. Creators. Guests.<br/>
          <span style={{ color: 'var(--color-gold)', marginTop: '20px', display: 'block', fontSize: '1.8rem' }}>A local ecosystem connected around one place: YOUR HOME.</span>
        </h2>
      </section>
    </div>
  );
};

export default Experience;
