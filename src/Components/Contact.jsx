import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contato" className="contact-us">
      <h1>Contato</h1>
      <div className="social-icons">
        <a className='wsp-ico' target='blank' href="https://api.whatsapp.com/send?phone=5597507890">
        <FaWhatsapp /> WhatsApp 
        </a>
        <a className='insta-ico' target='blank' href="https://www.instagram.com/paulogabrielb">
          <FaInstagram /> Instagram
        </a>
      </div>
    </section>
  );
};

export default Contact;
