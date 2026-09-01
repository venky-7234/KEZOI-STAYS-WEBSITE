import React from 'react';
import './KezoiStory.css';

const KezoiStory = () => {
  return (
    <section className="kezoi-story-section">
      <div className="kezoi-story-header">
        <span className="story-eyebrow">THE KEZOI STORY</span>
        <h2 className="story-title">THE PEOPLE BEHIND THE EXPERIENCE.</h2>
      </div>
      
      <div className="story-grid">
        {['The Cook', 'The Care Partner', 'The Driver'].map((person, index) => (
          <div className="story-card" key={index}>
            <h3 className="story-card-title">{person}</h3>
          </div>
        ))}
      </div>

      <div className="story-closing">
        <h2 className="story-closing-text">
          KEZOI IS BUILT BY PEOPLE.<br/>
          Homes. Cooks. Drivers. Care teams. Creators. Guests.<br/>
          <span className="story-highlight">A local ecosystem connected around one place: YOUR HOME.</span>
        </h2>
      </div>
    </section>
  );
};

export default KezoiStory;
