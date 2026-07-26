import { MdArrowOutward, MdCopyright, MdOpenInNew, MdEmail, MdPhone } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Let's <span>Connect</span></h2>
          <p className="contact-tagline">
            Open to full-time roles, collaborations, and interesting problems.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-card-icon">
              <MdEmail />
            </div>
            <h4>Contact Info</h4>
            <div className="contact-links">
              <a href="mailto:arif18052@gmail.com" className="contact-item">
                <span className="contact-label">Email</span>
                <span className="contact-value">arif18052@gmail.com <MdArrowOutward /></span>
              </a>
              <a href="tel:+919797012112" className="contact-item">
                <span className="contact-label">Phone</span>
                <span className="contact-value">+91 97970 12112 <MdArrowOutward /></span>
              </a>
              <div className="contact-item">
                <span className="contact-label">Location</span>
                <span className="contact-value">Bengaluru, Karnataka</span>
              </div>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon contact-card-icon--social">
              <FaLinkedinIn />
            </div>
            <h4>Social & Profiles</h4>
            <div className="contact-links">
              <a href="https://www.linkedin.com/in/arif-ashraf-3abb89179" target="_blank" rel="noreferrer" className="contact-item">
                <span className="contact-label">LinkedIn</span>
                <span className="contact-value">arif-ashraf <MdArrowOutward /></span>
              </a>
              <a href="https://github.com/arifashraf01" target="_blank" rel="noreferrer" className="contact-item">
                <span className="contact-label">GitHub</span>
                <span className="contact-value">arifashraf01 <MdArrowOutward /></span>
              </a>
              <div className="contact-item">
                <span className="contact-label">Availability</span>
                <span className="contact-value text-green">Open to Opportunities</span>
              </div>
            </div>
          </div>

          <div className="contact-card contact-card--wide">
            <h4>Education</h4>
            <div className="contact-links">
              <div className="contact-item">
                <span className="contact-label">Degree</span>
                <span className="contact-value">B.E. Computer Science &amp; Engineering</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">University</span>
                <span className="contact-value">SEACET, Bengaluru</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Year</span>
                <span className="contact-value">2022 – 2026</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">CGPA</span>
                <span className="contact-value">8.6 / 10</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-actions">
          <a
            href={`${import.meta.env.BASE_URL}arifashraf_resume.pdf?v=20260416-1`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-resume-btn"
            aria-label="View Resume"
          >
            View Resume <MdOpenInNew />
          </a>
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
