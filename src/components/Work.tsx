import "./styles/Work.css";
import WorkImage from "./WorkImage";

const baseUrl = import.meta.env.BASE_URL;

const projects = [
  {
    title: "DPI Engine",
    category: "Deep Packet Inspection System",
    tools: "C++, Networking, PCAP Parsing, Multithreading, TLS",
    image: `${baseUrl}images/dpi-engine.svg`,
    link: "https://github.com/arifashraf01/Packet_analyzer",
  },
  {
    title: "Real-Time Chat Application",
    category: "Spring Boot WebSocket Chat",
    tools: "Java, Spring Boot, WebSocket, REST APIs",
    image: `${baseUrl}images/chatapp.png`,
    link: "https://github.com/arifashraf01/ephemeral-chat-system",
  },
];

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-grid">
          {projects.map((project, index) => (
            <div className="work-item" key={index}>
              <div className="work-image-container">
                <WorkImage
                  image={project.image}
                  alt={project.title}
                  link={project.link}
                />
              </div>
              <div className="work-info">
                <div className="work-number">
                  <h3>0{index + 1}</h3>
                </div>
                <div className="work-details">
                  <h4>{project.title}</h4>
                  <p className="work-category">{project.category}</p>
                  <div className="work-tools">
                    <span className="tools-label">Tools & Features</span>
                    <p>{project.tools}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
