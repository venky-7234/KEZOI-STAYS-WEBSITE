import React from 'react';
import './Pillars.css';
import { Link } from 'react-router-dom';

const Pillars = () => {
  const pillarsData = [
    {
      number: "01",
      title: "KEZOI TABLE",
      description: "Food, made close to home. Curated cloud-kitchen partners and local culinary creators connected to your stay.",
      cta: "EXPLORE TABLE",
      link: "/experiences/table"
    },
    {
      number: "02",
      title: "KEZOI CARE",
      description: "Because a home should take care of you. Laundry, housekeeping and everyday care services designed around your stay.",
      cta: "EXPLORE CARE",
      link: "/experiences/care"
    },
    {
      number: "03",
      title: "KEZOI MOVE",
      description: "The city, without the friction. Curated cab, auto and mobility partners available around your home.",
      cta: "EXPLORE MOVE",
      link: "/experiences/move"
    },
    {
      number: "04",
      title: "KEZOI HOMES",
      description: "The home itself. Distinctive homes selected for character, comfort, design and location.",
      cta: "EXPLORE HOMES",
      link: "/properties"
    }
  ];

  return (
    <section className="pillars-section">
      <div className="pillars-container">
        <div className="pillars-header">
          <h2 className="pillars-main-title">THE FOUR KEZOI PILLARS</h2>
          <div className="pillars-micro-copy">
            <h3>ONE HOME. FOUR WAYS TO LIVE IT.</h3>
            <p>Stay. Eat. Move. Be cared for. Everything you need, around one beautiful home.</p>
          </div>
        </div>

        <div className="pillars-grid">
          {pillarsData.map((pillar, index) => (
            <div className="pillar-card" key={index}>
              <div className="pillar-number">{pillar.number}</div>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-description">{pillar.description}</p>
              <Link to={pillar.link} className="pillar-cta btn-outline">{pillar.cta}</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
