import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h2>Let's <span>Connect</span></h2>
        
        <div className="contact-grid">
          
          <div className="contact-card">
            <h4>Contact Info</h4>
            <div className="contact-links">
              <a href="mailto:arif18052@gmail.com" className="contact-item">
                <span className="contact-label">Email</span>
                <span className="contact-value">arif18052@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/arif-ashraf-3abb89179" target="_blank" rel="noreferrer" className="contact-item">
                <span className="contact-label">LinkedIn</span>
                <span className="contact-value">arif-ashraf <MdArrowOutward /></span>
              </a>
              <a href="https://github.com/arifashraf01" target="_blank" rel="noreferrer" className="contact-item">
                <span className="contact-label">GitHub</span>
                <span className="contact-value">arifashraf01 <MdArrowOutward /></span>
              </a>
            </div>
          </div>

          <div className="contact-card">
            <h4>Education & Status</h4>
            <div className="contact-links">
              <div className="contact-item">
                <span className="contact-label">Degree</span>
                <span className="contact-value">B.E. Computer Science</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">University</span>
                <span className="contact-value">SEACET Bengaluru (2022-2026)</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Availability</span>
                <span className="contact-value text-green">Open to Opportunities</span>
              </div>
            </div>
          </div>

        </div>

        <div className="contact-footer">
          <h3>Designed and Developed by <span>Arif Ashraf</span></h3>
          <p><MdCopyright /> {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
