import React, { useState }  from 'react';
import './home.css';
import logo from '../../assets/logo.png';
import repair from '../../assets/service-maintenance-worker-repairing (1).png';
const Home = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    countryCode: '+91',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
   const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
  };
  return (
    <div className="home">
      <nav className="navbar">
        <div className="navbar-container">
          <img src={logo} alt='logo' className='logo-icon'/>
          <div className="navbar-logo">
            
            <span className="logo-text">Appliancekerala.com</span>
          </div>

          {/* Navigation Menu */}
          <div className="navbar-menu">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a 
                  href="#home" 
                  className="nav-link"
                  onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a 
                  href="#about" 
                  className="nav-link"
                  onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a 
                  href="#services" 
                  className="nav-link"
                  onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a 
                  href="#faq" 
                  className="nav-link"
                  onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}
                >
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <a 
  href="#contact" 
  className="nav-link"
  onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
>
  Contact
</a>
              </li>
            </ul>
          </div>

          {/* Call Button */}
          <div className="navbar-call">
            <button 
              className="call-btn"
              onClick={() => window.open('https://wa.me/918920400300?text=Hello! I need help with appliance service.', '_blank')}
            >
             Call Now 89 20 400 300
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Home Appliance Repair Service in Kochi</h1>
            <p>Expert Solutions for Your  Home Appliance Repair Service in Kochi 24x 7</p>
            
          </div>
          <div className="hero-image">
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

          </div>
        </div>
      </div>      
      {/* Horizontal Line */}
      <div className="section-divider"></div>
       {/* Contact Section */}
      <div className="contact-section" id="contact">
        
        <div className="contact-container">
          <div className="contact-background">
            <img src={repair} alt="Contact Background" className="contact-bg-image" />
          </div>
          <div className="contact-form-wrapper">
            
            <div className="contact-form-container">
              <h2 className="contact-title">Contact Us</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="fullName">Full Name*</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group phone-group">
                  <label htmlFor="phone">Phone*</label>
                  <div className="phone-input-wrapper">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleInputChange}
                      className="country-code-select"
                    >
                      <option value="+91">+91 (India)</option>
                      <option value="+1">+1 (USA)</option>
                      <option value="+44">+44 (UK)</option>
                      <option value="+971">+971 (UAE)</option>
                      <option value="+966">+966 (Saudi Arabia)</option>
                      <option value="+974">+974 (Qatar)</option>
                      <option value="+965">+965 (Kuwait)</option>
                      <option value="+973">+973 (Bahrain)</option>
                      <option value="+968">+968 (Oman)</option>
                      <option value="+60">+60 (Malaysia)</option>
                      <option value="+65">+65 (Singapore)</option>
                    </select>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Enter subject"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                <button type="submit" className="send-btn">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Blue Info Section */}
      <div className="why-choose-us-section">
  <div className="why-choose-container">
    <h2 className="section-title">WHY CHOOSE US</h2>
    
    {/* Row 1 - Skilled Repair Technicians */}
    <div className="choice-row">
      <div className="choice-column icon-column">
        <div className="info-icon">
          <div className="icon-squares">
            <div className="icon-square"></div>
            <div className="icon-square"></div>
            <div className="icon-square"></div>
            <div className="icon-square"></div>
          </div>
        </div>
        <h3>SKILLED REPAIR TECHNICIANS</h3>
      </div>
      <div className="choice-column content-column">
        <p>Located in Kochi, Kerala, ApplianceKerala Home Appliance Repair Services has a dedicated team of 10 skilled technicians specializing in smart home installations and appliance repairs. From fridges and freezers to washing machines, microwaves, and ACs – our experts deliver trusted service at your doorstep with transparent pricing and guaranteed satisfaction</p>
      </div>
      <div className="choice-column button-column">
        <button className="choice-btn">Customer Reviews</button>
      </div>
    </div>
    
    <div className="horizontal-line"></div>
    
    {/* Row 2 - Client Satisfaction */}
    <div className="choice-row">
      <div className="choice-column icon-column">
        <div className="info-icon">
          <div className="icon-diamond">
            <div className="diamond-shape"></div>
            <div className="diamond-shape"></div>
            <div className="diamond-shape"></div>
            <div className="diamond-shape"></div>
          </div>
        </div>
        <h3>CLIENT SATISFACTION</h3>
      </div>
      <div className="choice-column content-column">
        <p>Client satisfaction is our top priority. We strive to exceed client expectations by providing exceptional service, reliable solutions, and a positive experience with every interaction.</p>
      </div>
      <div className="choice-column button-column">
        <button className="choice-btn">Contact Us</button>
      </div>
    </div>
    
    <div className="horizontal-line"></div>
    
    {/* Row 3 - 24/7 Service Availability */}
    <div className="choice-row">
      <div className="choice-column icon-column">
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
        <h3>24/7 SERVICE AVAILABILITY</h3>
      </div>
      <div className="choice-column content-column">
        <p>We understand that appliance problems don't wait for convenient times. That's why we offer round-the-clock emergency repair services to ensure your home runs smoothly at all times.</p>
      </div>
      <div className="choice-column button-column">
        <button className="choice-btn">Book Service</button>
      </div>
    </div>
  </div>
</div>
    </div>
    
  )
};

export default Home;