import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../components/About.css';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const properties = [
    {
      id: 'old-city-house',
      name: 'THE OLD CITY HOUSE',
      location: 'Hyderabad',
      guests: '4 Guests',
      bedrooms: '2 Bedrooms',
      tags: 'Heritage / Local / Private',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'lake-view-villa',
      name: 'THE LAKE VIEW VILLA',
      location: 'Hyderabad',
      guests: '6 Guests',
      bedrooms: '3 Bedrooms',
      tags: 'Modern / Scenic / Retreat',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="presence-hero">
        <span className="presence-hero-eyebrow">HOMES THAT FEEL LIKE SOMEWHERE.</span>
        <h1 className="presence-hero-title">NOT ROOMS. HOMES WITH CHARACTER.</h1>
      </section>

      {/* Featured Home */}
      <section className="featured-home">
        <div className="featured-home-image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
            alt="The Kezoi House - Hyderabad" 
            className="featured-home-image"
          />
          <div className="featured-home-overlay">
            <div>
              <h2 className="featured-home-title">THE KEZOI HOUSE — HYDERABAD</h2>
              <div className="featured-home-meta">Signature Property • 8 Guests • 4 Bedrooms</div>
            </div>
            <Link to="/stays/kezoi-house-hyderabad" className="view-home-cta">
              VIEW HOME
            </Link>
          </div>
        </div>
      </section>

      {/* Property Grid */}
      <section className="property-grid-section">
        <div className="property-grid">
          {properties.map(property => (
            <Link to={`/stays/${property.id}`} className="property-card" key={property.id}>
              <div className="property-card-image-wrapper">
                <img src={property.image} alt={property.name} className="property-card-image" />
              </div>
              <h3 className="property-card-title">{property.name}</h3>
              <p className="property-card-details">
                {property.location}, {property.guests} · {property.bedrooms}
              </p>
              <div className="property-card-tags">{property.tags}</div>
            </Link>
          ))}
        </div>
      </section>


      {/* Closing Statement */}
      <section className="closing-statement">
        <h2 className="closing-statement-text">YOU ARE NOT CHECKING IN.<br/>YOU ARE ARRIVING HOME.</h2>
      </section>
    </div>
  );
};

export default About;
