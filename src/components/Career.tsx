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
              <h3>OCT 2025–PRESENT</h3>
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
                <h4>Software Developer Intern</h4>
                <h5>Bluestock Fintech</h5>
              </div>
              <h3>JAN 2025–OCT 2025</h3>
            </div>
            <p>
              Developed high-performance backend modules for fintech applications,
              optimized database queries for large financial datasets, and improved
              API response times across core services.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E. Computer Science</h4>
                <h5>SEACET, Bengaluru</h5>
              </div>
              <h3>2022–2026</h3>
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
