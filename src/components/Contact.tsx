import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/arif-ashraf-3abb89179"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — arif-ashraf-3abb89179
              </a>
            </p>
            <p>
              <a href="mailto:arif18052@gmail.com" data-cursor="disable">
                Email — arif18052@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>
              B.E. Computer Science, SEACET Bengaluru — 2022–Present
            </p>
            <p>
              CGPA: 8.5/10
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/arifashraf01"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/arif-ashraf-3abb89179"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="mailto:arif18052@gmail.com"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Arif Ashraf</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
