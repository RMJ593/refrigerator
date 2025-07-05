import React, { useState } from 'react';
import './faq.css';

const FAQ = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What services do you offer?",
      answer: "At ApplianceKerala, we offer a wide range of appliance repair services including refrigerator repairs, washing machine repairs, AC servicing, microwave repairs, freezer repairs, and kitchen appliance repairs. Our experienced team is dedicated to resolving any appliance issues efficiently and effectively, ensuring your satisfaction with every job."
    },
    {
      id: 2,
      question: "Are your technicians certified?",
      answer: "Yes, all our technicians at ApplianceKerala are fully certified and licensed professionals. They undergo rigorous training and have the expertise to handle various appliance repairs with precision and skill. You can trust our team to deliver high-quality workmanship and reliable service."
    },
    {
      id: 3,
      question: "Do you provide emergency services?",
      answer: "Absolutely! ApplianceKerala understands that appliance emergencies can happen at any time. That's why we offer prompt emergency appliance repair services to address urgent issues quickly. Whether it's a refrigerator breakdown, washing machine malfunction, or any other appliance issue, you can rely on us to respond quickly and resolve the problem effectively."
    },
    {
      id: 4,
      question: "What areas do you serve?",
      answer: "We provide our appliance repair services throughout Kochi and surrounding areas in Kerala. Our mobile service team can reach your location quickly to provide on-site repairs and maintenance for all your home appliances."
    },
    {
      id: 5,
      question: "Do you offer warranty on repairs?",
      answer: "Yes, we stand behind our work with a comprehensive warranty on all repairs. We use only genuine parts and provide guaranteed satisfaction on every service call. Your peace of mind is our priority."
    },
    {
      id: 6,
      question: "How can I schedule a service appointment?",
      answer: "You can easily schedule a service appointment by calling us at 89 20 400 300, messaging us on WhatsApp, or filling out our online contact form. We offer flexible scheduling to accommodate your busy lifestyle."
    }
  ];

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">FREQUENTLY ASKED QUESTIONS</h2>
        
        <div className="faq-accordion">
          {faqs.map(faq => (
            <div key={faq.id} className="faq-item">
              <div 
                className="faq-question" 
                onClick={() => toggleAccordion(faq.id)}
              >
                <h3>{faq.question}</h3>
                <span className={`faq-icon ${openAccordion === faq.id ? 'active' : ''}`}>
                  +
                </span>
              </div>
              <div className={`faq-answer ${openAccordion === faq.id ? 'active' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;