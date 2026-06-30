import "./styles/Work.css";
import { FaGithub } from "react-icons/fa6";
import { MdOutlineCode, MdChatBubbleOutline, MdOutlineSmartToy } from "react-icons/md";

const baseUrl = import.meta.env.BASE_URL;

const projects = [
  {
    title: "DPI Engine",
    category: "Deep Packet Inspection System",
    tools: "C++, Networking, PCAP Parsing, Multithreading, TLS",
    image: `${baseUrl}images/dpi-engine.svg`,
    link: "https://github.com/arifashraf01/Packet_analyzer",
    description: "A high-performance C++ packet analyzer that processes raw PCAP files and captures live network traffic to extract detailed transport and application layer information.",
    icon: <MdOutlineCode />
  },
  {
    title: "Real-Time Chat Application",
    category: "Spring Boot WebSocket Chat",
    tools: "Java, Spring Boot, WebSocket, REST APIs",
    image: `${baseUrl}images/chatapp.png`,
    link: "https://github.com/arifashraf01/ephemeral-chat-system",
    description: "A secure, ephemeral messaging platform built with Spring Boot and WebSockets, featuring real-time bi-directional communication.",
    icon: <MdChatBubbleOutline />
  },
  {
    title: "Django AI Assistant",
    category: "AI Integration & Backend",
    tools: "Python, Django, LLM API, REST Framework",
    image: "", 
    link: "https://github.com/arifashraf01/Django-AI-Assistant",
    description: "An intelligent backend service powered by Django and AI models to automate tasks, process natural language, and provide context-aware responses.",
    icon: <MdOutlineSmartToy />
  },
  {
    title: "Matrix Chat App",
    category: "Frontend UI/UX",
    tools: "React, TypeScript, Tailwind CSS",
    image: "", 
    link: "https://github.com/arifashraf01/Matrix-chat",
    description: "A sleek, responsive frontend interface for a modern chat application, focusing on real-time UX, clean architecture, and fluid interactions.",
    icon: <MdChatBubbleOutline />
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
                    <span className="tools-label">Tools & Features</span>
                    <p>{project.tools}</p>
                  </div>
                  <a href={project.link} target="_blank" rel="noreferrer" className="work-github-btn">
                    <FaGithub /> View on GitHub
                  </a>
                </div>
              </div>
              <div className="work-image-container">
                {project.image ? (
                  <img src={project.image} alt={project.title} loading="lazy" />
                ) : (
                  <div className="work-placeholder">
                    {project.icon}
                  </div>
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
