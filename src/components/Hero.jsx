import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const [activePanel, setActivePanel] = useState('live');
  const navigate = useNavigate();

  const handlePanelClick = (id, link, e) => {
    e.preventDefault();
    // If clicking a non-active panel, expand it.
    // If it is already active, navigate to the page.
    if (activePanel !== id) {
      setActivePanel(id);
    } else {
      navigate(link);
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation for the panels
      gsap.fromTo('.hero-frame',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          delay: 0.2
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const panels = [
    {
      id: 'live',
      title: 'Kezoi Live',
      image: '/kezoi_live_bg.jpg',
      link: '/experiences/live'
    },
    {
      id: 'care',
      title: 'Kezoi Care',
      image: '/kezoi_care_bg.jpg',
      link: '/experiences/care'
    },
    {
      id: 'move',
      title: 'Kezoi Move',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      link: '/experiences/move'
    },
    {
      id: 'table',
      title: 'Kezoi Table',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      link: '/experiences/table'
    }
  ];

  return (
    <section className="hero-split" ref={heroRef} id="home">
      {panels.map((panel) => (
        <a 
          href={panel.link} 
          className={`hero-frame frame-${panel.id} ${activePanel === panel.id ? 'active' : ''} ${activePanel && activePanel !== panel.id ? 'inactive' : ''}`} 
          key={panel.id}
          onClick={(e) => handlePanelClick(panel.id, panel.link, e)}
        >
          <div 
            className="frame-bg"
            style={{ backgroundImage: `url('${panel.image}')` }}
          ></div>
          <div className="frame-overlay"></div>
          
          <div className="frame-content">
            <h2 className="frame-title">{panel.title}</h2>
            <span className="frame-subtitle">CLICK TO EXPLORE MORE</span>
          </div>
        </a>
      ))}

      {/* Floating Icons */}
      <div className="hero-floating-icons">
        <a href="https://www.instagram.com/kezoistays?igsi=MTE1Z2pmNWU4OW45dA==" target="_blank" rel="noopener noreferrer" className="hero-float-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
        <a href="/contact" className="hero-float-icon hero-book-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
          </svg>
          <span className="hero-float-text">BOOK STAY</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
