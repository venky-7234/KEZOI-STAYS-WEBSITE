import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Home, Briefcase, Star, Phone, MessageCircle, Mail, Send } from 'lucide-react';
import './Partner.css';

gsap.registerPlugin(ScrollTrigger);

const Partner = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Hero Animation
      gsap.fromTo('.partner-hero-title', 
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" }
      );
      
      gsap.fromTo('.partner-hero-copy', 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power4.out", delay: 0.3 }
      );

      // Pathways Stagger Animation
      gsap.fromTo('.pathway-card',
        { opacity: 0, y: 80 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          stagger: 0.2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".partner-pathways",
            start: "top 80%",
          }
        }
      );

      // Flow Steps Animation
      const flowSteps = gsap.utils.toArray('.flow-step');
      flowSteps.forEach((step, i) => {
        gsap.fromTo(step,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: step,
              start: "top 85%",
            }
          }
        );
      });

      // Contact Options Animation
      gsap.fromTo('.contact-option',
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".partner-contact",
            start: "top 80%",
          }
        }
      );

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="partner-page" ref={containerRef}>
      
      {/* Hero Section */}
      <section className="partner-hero section-padding">
        <h1 className="partner-hero-title">THE KEZOI ECOSYSTEM</h1>
        <h2 className="partner-hero-copy">
          WE DON'T WANT TO BUILD ANOTHER STAY PLATFORM. <br/>
          <span className="text-gold">WE WANT TO REDEFINE WHAT A STAY CAN BE.</span>
        </h2>
      </section>

      {/* Partner Pathways */}
      <section className="partner-pathways section-padding">
        <div className="pathways-grid">
          <div className="pathway-card">
            <div className="pathway-icon"><Home size={40} /></div>
            <h3>List Your Home</h3>
            <p>Transform your property into a premium Kezoi stay. We handle everything from styling to guest management.</p>
          </div>
          <div className="pathway-card">
            <div className="pathway-icon"><Briefcase size={40} /></div>
            <h3>Become a Partner</h3>
            <p>Collaborate with us to expand the ecosystem. Join our network of elite service providers and curators.</p>
          </div>
          <div className="pathway-card">
            <div className="pathway-icon"><Star size={40} /></div>
            <h3>Create an Experience</h3>
            <p>Bring your unique talent to Kezoi guests. Curate memorable dining, wellness, or adventure experiences.</p>
          </div>
        </div>
      </section>

      {/* Booking Flow */}
      <section className="partner-flow section-padding">
        <div className="flow-container">
          <h3 className="section-heading text-center mb-5">The Kezoi Booking Flow</h3>
          <div className="flow-timeline">
            
            <div className="flow-step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h4>Select Home</h4>
                <p>Browse our curated collection of premium properties.</p>
              </div>
            </div>

            <div className="flow-step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h4>Choose Dates</h4>
                <p>Select your check-in and check-out schedule seamlessly.</p>
              </div>
            </div>

            <div className="flow-step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h4>Select Services</h4>
                <p>Enhance your stay with Table, Move, Care, and bespoke Experiences.</p>
              </div>
            </div>

            <div className="flow-step">
              <div className="step-number">04</div>
              <div className="step-content">
                <h4>Review Stay</h4>
                <p>Confirm your itinerary and curated add-ons all in one place.</p>
              </div>
            </div>

            <div className="flow-step">
              <div className="step-number">05</div>
              <div className="step-content">
                <h4>Confirm</h4>
                <p>Finalize your booking and prepare for a redefined living experience.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="partner-contact section-padding">
        <h3 className="section-heading text-center mb-5">Get in Touch</h3>
        <div className="contact-options-grid">
          
          <a href="tel:+919876543210" className="contact-option">
            <Phone size={32} />
            <span>Call Us</span>
          </a>

          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="contact-option">
            <MessageCircle size={32} />
            <span>WhatsApp</span>
          </a>

          <a href="mailto:partner@kezoistays.com" className="contact-option">
            <Mail size={32} />
            <span>Email</span>
          </a>

          <a href="/contact" className="contact-option">
            <Send size={32} />
            <span>Contact Form</span>
          </a>

        </div>
      </section>

    </div>
  );
};

export default Partner;
