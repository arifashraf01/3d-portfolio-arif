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
              Software Engineer & <span className="highlight">Backend Developer</span>
            </h3>
            <p className="landing-bio">
              I specialize in designing and building highly scalable, secure backend systems, 
              REST APIs, and real-time WebSocket architectures using Django and Spring Boot.
            </p>
            <div className="landing-actions">
              <a href="#work" className="btn-primary">View Projects</a>
              <a href="#contact" className="btn-secondary">Let's Connect</a>
            </div>
          </div>
        </div>
      </div>
      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
    </>
  );
};

export default Landing;
