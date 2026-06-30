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
              Final-Year CSE Student & <span className="highlight">Backend Developer</span>
            </h3>
            <p className="landing-tags">
              Django &bull; Spring Boot &bull; System Design &bull; C++ &bull; Networking
            </p>
          </div>
        </div>
      </div>
      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
    </>
  );
};

export default Landing;
