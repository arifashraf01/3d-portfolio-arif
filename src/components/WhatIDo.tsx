import { useState } from "react";
import "./styles/WhatIDo.css";

const WhatIDo = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in" style={{ display: "flex" }}>
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className={`what-content ${activeTab === 0 ? "what-content-active" : "what-sibling"}`}
            onClick={() => setActiveTab(0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

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
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className={`what-content ${activeTab === 1 ? "what-content-active" : "what-sibling"}`}
            onClick={() => setActiveTab(1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
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
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
