import "./styles/Landing.css";

const Landing = () => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-content">
            <p className="landing-greeting">Hello, I'm</p>
            <h1 className="landing-name">ARIF ASHRAF</h1>
            <h2 className="landing-role">
              Software Engineer &amp;{" "}
              <span className="highlight">Full Stack Developer</span>
            </h2>
            <p className="landing-bio">
              I architect and ship scalable backend systems, production REST APIs,
              and intuitive interfaces — using Java, Spring Boot, Django, and React.
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
