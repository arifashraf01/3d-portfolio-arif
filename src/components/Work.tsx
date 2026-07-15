import "./styles/Work.css";
import { FaGithub } from "react-icons/fa6";
import { MdOutlineCode, MdChatBubbleOutline, MdOutlineSmartToy } from "react-icons/md";

const baseUrl = import.meta.env.BASE_URL;

const projects = [
  {
    title: "DPI Engine",
    category: "Deep Packet Inspection · Systems Programming",
    tools: ["C++", "Networking", "PCAP", "Multithreading", "TLS"],
    image: `${baseUrl}images/dpi-engine.svg`,
    link: "https://github.com/arifashraf01/Packet_analyzer",
    description:
      "A high-performance C++ packet analyzer that processes raw PCAP files and captures live traffic, extracting transport and application-layer details including TLS session metadata.",
    icon: <MdOutlineCode />,
  },
  {
    title: "Real-Time Chat App",
    category: "Spring Boot · WebSocket",
    tools: ["Java", "Spring Boot", "WebSocket", "REST APIs"],
    image: `${baseUrl}images/chatapp.png`,
    link: "https://github.com/arifashraf01/ephemeral-chat-system",
    description:
      "An ephemeral messaging platform with WebSocket-powered bi-directional communication, built on Spring Boot with session-scoped message storage and clean REST endpoints.",
    icon: <MdChatBubbleOutline />,
  },
  {
    title: "Django AI Assistant",
    category: "AI Integration · Backend",
    tools: ["Python", "Django", "LLM API", "REST Framework"],
    image: `${baseUrl}images/ai-assist.png`,
    link: "https://github.com/arifashraf01/Django-AI-Assistant",
    description:
      "An intelligent backend service that wires Django to large language model APIs, handling context management, prompt engineering, and natural language response delivery.",
    icon: <MdOutlineSmartToy />,
  },
  {
    title: "Matrix Chat Frontend",
    category: "Frontend · UI/UX",
    tools: ["React", "TypeScript", "Tailwind CSS"],
    image: `${baseUrl}images/matrix-chat.png`,
    link: "https://github.com/arifashraf01/Matrix_chat_frontend",
    description:
      "A polished React + TypeScript frontend for a real-time chat platform, with a focus on smooth interactions, clean component architecture, and a responsive layout.",
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
            <div className="work-item" key={index}>
              <div className="work-info">
                <div className="work-details">
                  <h4>{project.title}</h4>
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
                    <FaGithub /> View on GitHub
                  </a>
                </div>
              </div>
              <div className="work-image-container">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                  />
                ) : (
                  <div className="work-placeholder">{project.icon}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
