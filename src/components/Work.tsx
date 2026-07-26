import "./styles/Work.css";
import { FaGithub } from "react-icons/fa6";
import { MdOutlineCode, MdChatBubbleOutline, MdOutlineSmartToy, MdStorefront } from "react-icons/md";
import { MdOpenInNew } from "react-icons/md";

const baseUrl = import.meta.env.BASE_URL;

const projects = [
  {
    title: "DPI Engine",
    category: "Systems Programming · Deep Packet Inspection",
    tools: ["C++", "PCAP", "Multithreading", "TLS/SNI", "Networking"],
    image: `${baseUrl}images/dpi-engine.svg`,
    link: "https://github.com/arifashraf01/Packet_analyzer",
    liveLink: null,
    description:
      "A high-performance C++ packet analyzer that parses raw PCAP captures and inspects live network traffic. Implements custom parsers for Ethernet, IPv4, TCP/UDP, extracts TLS SNI for domain identification, and runs a multithreaded pipeline for real-time throughput.",
    icon: <MdOutlineCode />,
  },
  {
    title: "Real-Time Chat App",
    category: "Spring Boot · WebSocket · REST APIs",
    tools: ["Java", "Spring Boot", "WebSocket", "REST APIs", "PostgreSQL"],
    image: `${baseUrl}images/chatapp.png`,
    link: "https://github.com/arifashraf01/ephemeral-chat-system",
    liveLink: "https://chatapp.stacksense.in",
    description:
      "Ephemeral messaging platform powered by WebSocket for sub-second bidirectional communication. Built on Java Spring Boot, exposes 10+ REST APIs for rooms and authentication, and handled 50+ concurrent users with stable delivery during load testing.",
    icon: <MdChatBubbleOutline />,
  },
  {
    title: "Gill Organics",
    category: "Django · E-commerce · REST APIs",
    tools: ["Django", "REST Framework", "PostgreSQL", "E-commerce"],
    image: `${baseUrl}images/ai-assist.png`,
    link: null,
    liveLink: "https://gillorganics.com",
    description:
      "Client e-commerce backend built with Django — engineered 12+ REST APIs for product catalog, authentication, and order workflows, enabling full end-to-end automation and reducing manual processing overhead in production.",
    icon: <MdStorefront />,
  },
  {
    title: "Django AI Assistant",
    category: "AI Integration · Backend",
    tools: ["Python", "Django", "LLM APIs", "REST Framework"],
    image: `${baseUrl}images/matrix-chat.png`,
    link: "https://github.com/arifashraf01/Django-AI-Assistant",
    liveLink: null,
    description:
      "Intelligent Django backend that wires large language model APIs into a structured service layer, handling context management, prompt engineering, and delivering natural language responses over clean REST endpoints.",
    icon: <MdOutlineSmartToy />,
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
            <article className="work-item" key={index}>
              <div className="work-info">
                <div className="work-details">
                  <h3>{project.title}</h3>
                  <p className="work-category">{project.category}</p>
                  <p className="work-description">{project.description}</p>
                  <div className="work-tools">
                    <span className="tools-label">Stack</span>
                    <div className="tools-tags">
                      {project.tools.map((tool, i) => (
                        <span key={i} className="tool-tag">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="work-links">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="work-github-btn"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <FaGithub aria-hidden="true" /> GitHub
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="work-live-btn"
                        aria-label={`View ${project.title} live`}
                      >
                        <MdOpenInNew aria-hidden="true" /> Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="work-image-container">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                  />
                ) : (
                  <div className="work-placeholder" aria-hidden="true">
                    {project.icon}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
