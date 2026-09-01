import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const [activePanel, setActivePanel] = useState(null);
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
    </section>
  );
};

export default Hero;
