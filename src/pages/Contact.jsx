import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>Feel free to reach out via WhatsApp or any of my socials below.</p>

      <div className="social-links">
        <a
          href="https://wa.me/2348168785342"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaWhatsapp /> WhatsApp
        </a>
        <a
          href="mailto:ojiehgift2@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaEnvelope /> Email
        </a>
        <a
          href="https://github.com/cloud9inepro"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/yourusername/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaLinkedin /> LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;
