import "./styles/Landing.css";

const Landing = () => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-content">
            <h2 className="landing-greeting">Hello! I'm</h2>
            <h1 className="landing-name">ARIF ASHRAF</h1>
            <h3 className="landing-role">
              Software Engineer & <span className="highlight">Full Stack Developer</span>
            </h3>
            <p className="landing-bio">
              I specialize in designing and building highly scalable backend systems, 
              REST APIs, and intuitive user interfaces using modern web technologies.
            </p>
            <div className="landing-actions">
              <a href="#work" className="btn-primary">View Projects</a>
              <a href="#contact" className="btn-secondary">Let's Connect</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
