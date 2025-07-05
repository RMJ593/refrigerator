import React from 'react';
import './Footer.css';

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/918920400300?text=Hello! I need help with appliance service.', '_blank');
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Name */}
        <div className="footer-brand">
          <h1 className="footer-title">APPLIANCEKERALA</h1>
        </div>

        {/* WhatsApp Button */}
        <div className="footer-whatsapp">
          <button 
            className="whatsapp-btn"
            onClick={handleWhatsAppClick}
          >
             WhatsApp
          </button>
        </div>

        {/* Contact Information */}
        <div className="footer-content">
          <div className="footer-info">
            <div className="contact-item">
              <span>+91 8920400300</span>
            </div>
            <div className="contact-item">
              <span>repair@appliancekerala.com</span>
            </div>
            <div className="contact-item">
              <span>Kochi, Kerala - 691510</span>
            </div>
          </div>

          <div className="footer-links">
            <a href="#privacy" className="footer-link">Privacy Policy</a>
            <a href="#terms" className="footer-link">Terms and Conditions</a>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>© 2025 by Appliancekerala.com. Powered by TPHRC PVT LTD</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;