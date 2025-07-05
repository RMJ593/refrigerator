import React from 'react';
import aboutpic from '../../assets/aboutp.png';
import './about.css'

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          {/* Left side - Image */}
          <div className="about-image">
            <img src={aboutpic} alt="About ApplianceKerala" />
          </div>
          
          {/* Right side - Content */}
          <div className="about-text">
            <div className="step-icon">
        {/* Step/Stairs shape */}
        <div className="step-container">
          <div className="icon-square step-1"></div>
          <div className="icon-square step-2"></div>
          <div className="icon-square step-3"></div>
        </div>
        {/* Square underneath */}
        <div className="icon-square base-square"></div>
      </div>
            <h2 className="about-title">ABOUT APPLIANCE KERALA</h2>
            <p className="about-description">
              We specialize in fast, reliable repair of premium home appliances across Kochi. 
              From fridges and freezers to washing machines, microwaves, and ACs – our expert 
              technicians deliver trusted service at your doorstep with transparent pricing 
              and guaranteed satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;