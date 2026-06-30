import "./styles/WhatIDo.css";

const WhatIDo = () => {
  return (
    <div className="whatIDO section-container">
      <div className="what-header">
        <h2 className="title">
          W<span className="hat-h2">HAT</span> I<span className="do-h2"> DO</span>
        </h2>
      </div>
      <div className="what-boxes-container">
        
        <div className="what-content-static">
          <div className="what-content-in">
            <h3>BACKEND ENGINEERING</h3>
            <h4>Scalable APIs and System Design</h4>
            <p>
              I build reliable backend systems with Django and Spring Boot,
              focusing on clean architecture, secure authentication, and
              production-ready API design.
            </p>
            <h5>Skillset & tools</h5>
            <div className="what-content-flex">
              <div className="what-tags">Java</div>
              <div className="what-tags">Python</div>
              <div className="what-tags">Django</div>
              <div className="what-tags">Spring Boot</div>
              <div className="what-tags">REST APIs</div>
              <div className="what-tags">WebSocket APIs</div>
            </div>
          </div>
        </div>

        <div className="what-content-static">
          <div className="what-content-in">
            <h3>NETWORKING &amp; SYSTEMS</h3>
            <h4>Traffic Analysis and Real-Time Apps</h4>
            <p>
              I enjoy system-level development, from packet analysis pipelines
              to real-time chat architecture using WebSocket communication.
            </p>
            <h5>Skillset & tools</h5>
            <div className="what-content-flex">
              <div className="what-tags">C++</div>
              <div className="what-tags">PCAP Parsing</div>
              <div className="what-tags">TLS Analysis</div>
              <div className="what-tags">Multithreading</div>
              <div className="what-tags">MongoDB</div>
              <div className="what-tags">MySQL</div>
              <div className="what-tags">Git &amp; GitHub</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WhatIDo;
