import React from 'react';

const Contact = () => {
  return (
    <section className="contact-us">
      <h2 className="contact-us-title">Entre em Contato</h2>
      <div className="contact-us-buttons">
        <a href="https://api.whatsapp.com/send/?phone=5585997507890&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="contact-us-button whatsapp">
          <i className="fab fa-whatsapp"></i>
          <span>WhatsApp</span>
        </a>
        <a href="https://github.com/PauloGabrielB" target="_blank" rel="noopener noreferrer" className="contact-us-button github">
          <i className="fab fa-github"></i>
          <span>Github</span>
        </a>
        <a href="https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME/" target="_blank" rel="noopener noreferrer" className="contact-us-button linkedin">
          <i className="fab fa-linkedin-in"></i>
          <span>LinkedIn</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;