import React from 'react';
import './services.css';
import project1 from '../../assets/project/project_1.png';
import project2 from '../../assets/project/project_2.png';
import project3 from '../../assets/project/project_3.png';
import project4 from '../../assets/project/project_4.png';
import project5 from '../../assets/project/project_5.png';
import project6 from '../../assets/project/project_6.png';
import { useRef } from 'react';

const Services = () => {
  const projectsTrackRef = useRef(null);

const scrollProjects = (direction) => {
  const track = projectsTrackRef.current;
  if (!track) return;
  
  const scrollAmount = 320; // Width of one project item + gap
  const currentScroll = track.scrollLeft;
  
  if (direction === 'left') {
    track.scrollTo({
      left: currentScroll - scrollAmount,
      behavior: 'smooth'
    });
  } else {
    track.scrollTo({
      left: currentScroll + scrollAmount,
      behavior: 'smooth'
    });
  }
};
  const services = [
    {
      id: 1,
      title: "Fridge Repair Service",
      description: "Need fridge repair in Kochi? Our skilled technicians provide prompt and quality service to get your refrigerator running smoothly. Contact us today for hassle-free repairs!"
    },
    {
      id: 2,
      title: "Washing Machine Repair",
      description: "Expert washing machine repair services in Kochi. Our technicians handle all brands and models with precision. Get your laundry routine back on track with our reliable service!"
    },
    {
      id: 3,
      title: "AC Repair Service",
      description: "Stay cool with our professional AC repair services in Kochi. From installation to maintenance, our certified technicians ensure your air conditioner works efficiently year-round."
    },
    {
      id: 4,
      title: "Microwave Repair",
      description: "Quick and efficient microwave repair services in Kochi. Our experienced technicians diagnose and fix all microwave issues with genuine parts and guaranteed satisfaction."
    },
    {
      id: 5,
      title: "Freezer Repair Service",
      description: "Professional freezer repair services in Kochi. Keep your frozen foods safe with our expert repair solutions. Fast response time and quality service guaranteed!"
    },
    {
      id: 6,
      title: "Kitchen Appliance Repair",
      description: "Comprehensive kitchen appliance repair services in Kochi. From dishwashers to ovens, our skilled technicians restore your appliances to perfect working condition."
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h2 className="services-title">OUR SERVICES</h2>
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="call-expert-container">
          <button 
              className="call-btn"
              onClick={() => window.open('https://wa.me/918920400300?text=Hello! I need help with appliance service.', '_blank')}
            >
             Call Expert Now!
            </button>
        </div>
      </div>

      <section className="projects-section">
        <div className="projects-container">
          <h2 className="projects-title">OUR PROJECTS</h2>
          <div className="projects-carousel">
          <button className="carousel-arrow carousel-arrow-left" onClick={() => scrollProjects('left')}>
            &#8249;
          </button>
          
          <div className="projects-viewport">
          <div className="projects-track" ref={projectsTrackRef}>
            <div className="project-item">
              <img src={project1} alt="Project 1" />
            </div>
            <div className="project-item">
              <img src={project2} alt="Project 2" />
            </div>
            <div className="project-item">
              <img src={project3} alt="Project 3" />
            </div>
            <div className="project-item">
              <img src={project4} alt="Project 4" />
            </div>
            <div className="project-item">
              <img src={project5} alt="Project 5" />
            </div>
            <div className="project-item">
              <img src={project6} alt="Project 6" />
            </div>
          </div>
        </div>
        <button className="carousel-arrow carousel-arrow-right" onClick={() => scrollProjects('right')}>
            &#8250;
          </button>
          </div>
          </div>
      </section>
      <div className="blue-info-section">
        <h2 className="services-title">CLIENT TESTIMONIALS</h2>
        <div className="blue-info-container">
          
          {/* Section 1 - Skilled Repair Technicians */}
          <div className="info-card">
            <div className="info-icon">
              <div className="icon-squares">
                <div className="icon-square"></div>
                <div className="icon-square"></div>
                <div className="icon-square"></div>
                <div className="icon-square"></div>
              </div>
            </div>
            <div className="info-content">
              <h3>Shine Thomas </h3>
              <p>Excellent service! Appliancekerala's home repair services truly transformed my home with their smart home installations. The team was professional and courteous throughout the entire process, making it a seamless experience</p>
            </div>
          </div>

          {/* Section 2 - Client Satisfaction */}
          <div className="info-card">
            <div className="info-icon">
              <div className="icon-diamond">
                <div className="diamond-shape"></div>
                <div className="diamond-shape"></div>
                <div className="diamond-shape"></div>
                <div className="diamond-shape"></div>
              </div>
            </div>
            <div className="info-content">
              <h3>James Ben</h3>
              <p>"I highly recommend D. Jamieson for their exceptional electrical services. They arrived on time, identified the issue quickly, and resolved it efficiently.״</p>
            </div>
          </div>

          {/* Section 3 - Additional Info (you can customize this) */}
          <div className="info-card">
            <div className="info-icon">
              <div className="icon-grid">
                <div className="grid-dot"></div>
                <div className="grid-dot"></div>
                <div className="grid-dot"></div>
                <div className="grid-dot"></div>
                <div className="grid-dot"></div>
                <div className="grid-dot"></div>
                <div className="grid-dot"></div>
                <div className="grid-dot"></div>
                <div className="grid-dot"></div>
              </div>
            </div>
            <div className="info-content">
              <h3>Simina Vargheese</h3>
              <p>״Fast response and quality work! D. Jamieson helped me with an electrical emergency, and I couldn't be happier with the results.״</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default Services;
