import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer Intern</h4>
                <h5>Netpy Technologies</h5>
              </div>
              <h3>2025–NOW</h3>
            </div>
            <p>
              Built backend services with Django for a cloud-based e-commerce
              platform, designed REST APIs for auth, product and order flows,
              and implemented OTP login with role-based access control.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E. Computer Science</h4>
                <h5>SEACET, Bengaluru</h5>
              </div>
              <h3>2022–NOW</h3>
            </div>
            <p>
              Pursuing B.E. in Computer Science and Engineering with an 8.5 CGPA,
              while building production-focused backend and networking projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
