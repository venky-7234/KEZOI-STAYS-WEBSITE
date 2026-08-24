import React from 'react';
import ExperienceSection from '../components/Experience';

const Experience = () => {
  return (
    <div style={{ paddingTop: '100px' }}>
      <div className="section-padding" style={{ textAlign: 'center', paddingBottom: '0' }}>
        <h1 style={{ fontSize: '3.5rem', color: 'var(--color-ivory)', marginBottom: '20px' }}>The Kezoi Experience</h1>
        <p style={{ color: 'var(--color-grey)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
          We go beyond standard hospitality to provide a curated, seamless, and luxurious living experience tailored for the modern traveller.
        </p>
      </div>
      <ExperienceSection />
    </div>
  );
};

export default Experience;
