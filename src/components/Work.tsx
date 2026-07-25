import "./styles/Work.css";
import { FaGithub } from "react-icons/fa6";
import { MdOutlineCode, MdChatBubbleOutline, MdOutlineSmartToy } from "react-icons/md";

const baseUrl = import.meta.env.BASE_URL;

const projects = [
  {
    title: "DPI Engine",
    category: "Systems Programming · Deep Packet Inspection",
    tools: ["C++", "PCAP", "Multithreading", "TLS", "Networking"],
    image: `${baseUrl}images/dpi-engine.svg`,
    link: "https://github.com/arifashraf01/Packet_analyzer",
    description:
      "A high-performance C++ packet analyzer that parses raw PCAP captures and inspects live traffic. Implements custom parsers for Ethernet, IPv4, TCP/UDP, extracts TLS SNI for domain identification, and uses a multithreaded pipeline for real-time throughput.",
    icon: <MdOutlineCode />,
  },
  {
    title: "Real-Time Chat App",
    category: "Spring Boot · WebSocket",
    tools: ["Java", "Spring Boot", "WebSocket", "REST APIs"],
    image: `${baseUrl}images/chatapp.png`,
    link: "https://github.com/arifashraf01/ephemeral-chat-system",
    description:
      "Ephemeral messaging platform powered by WebSocket for sub-second bidirectional communication. Built with Spring Boot, exposes 10+ REST APIs for rooms and auth, and handled 50+ concurrent users during load testing.",
    icon: <MdChatBubbleOutline />,
  },
  {
    title: "Django AI Assistant",
    category: "AI Integration · Backend",
    tools: ["Python", "Django", "LLM API", "REST Framework"],
    image: `${baseUrl}images/ai-assist.png`,
    link: "https://github.com/arifashraf01/Django-AI-Assistant",
    description:
      "Intelligent Django backend that wires large language model APIs into a structured service layer, handling context management, prompt engineering, and delivering natural language responses over clean REST endpoints.",
    icon: <MdOutlineSmartToy />,
  },
  {
    title: "Matrix Chat Frontend",
    category: "Frontend · React · TypeScript",
    tools: ["React", "TypeScript", "Tailwind CSS"],
    image: `${baseUrl}images/matrix-chat.png`,
    link: "https://github.com/arifashraf01/Matrix_chat_frontend",
    description:
      "Polished React + TypeScript frontend for a real-time chat platform. Focuses on smooth interactions, clean component architecture, and a fully responsive layout — designed to pair with the Spring Boot WebSocket backend.",
    icon: <MdChatBubbleOutline />,
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
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="work-github-btn"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <FaGithub aria-hidden="true" /> View on GitHub
                  </a>
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
