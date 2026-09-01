import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Home, 
  Sofa, 
  Wifi, 
  Sparkles, 
  MapPin, 
  Key, 
  HeadphonesIcon, 
  Coffee 
} from 'lucide-react';
import './Experience.css';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: <Sofa size={32} />, title: 'Premium Interiors' },
  { icon: <Home size={32} />, title: 'Fully Furnished Homes' },
  { icon: <Wifi size={32} />, title: 'High-Speed Wi-Fi' },
  { icon: <Sparkles size={32} />, title: 'Professional Housekeeping' },
  { icon: <MapPin size={32} />, title: 'Prime Locations' },
  { icon: <Key size={32} />, title: 'Seamless Check-In' },
  { icon: <HeadphonesIcon size={32} />, title: 'Guest Support' },
  { icon: <Coffee size={32} />, title: 'Fully Equipped Kitchen' }
];

const Experience = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(itemsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="experience section-padding" id="experience" ref={sectionRef} style={{ paddingTop: '20px' }}>
      <div className="experience-header">
        <h2 className="section-title">Everything You Need.<br/>Nothing You Don't.</h2>
      </div>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="service-item"
            ref={el => itemsRef.current[index] = el}
          >
            <div className="service-icon">{service.icon}</div>
            <h4 className="service-title">{service.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
