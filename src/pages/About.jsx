import React from 'react';
import AboutSection from '../components/About';
import WhyKezoi from '../components/WhyKezoi';
import BrandStatement from '../components/BrandStatement';

const About = () => {
  return (
    <div style={{ paddingTop: '100px' }}>
      <div className="section-padding" style={{ textAlign: 'center', paddingBottom: '50px' }}>
        <h1 style={{ fontSize: '3.5rem', color: 'var(--color-ivory)', marginBottom: '20px' }}>Our Story</h1>
        <p style={{ color: 'var(--color-grey)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
          Kezoi Stays was founded with a singular vision: to redefine the short-stay and serviced apartment industry in Hyderabad. 
          We believe that travelling for business or leisure shouldn't mean sacrificing the comfort, privacy, and warmth of a home. 
          Our handpicked portfolio of premium properties is designed for those who appreciate the finer details.
        </p>
      </div>
      <AboutSection />
      <BrandStatement />
      <WhyKezoi />
    </div>
  );
};

export default About;
