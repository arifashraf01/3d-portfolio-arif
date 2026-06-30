import "./styles/TechStack.css";
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, 
  SiMongodb, SiMysql, SiTypescript, SiJavascript,
  SiPython, SiDjango, SiSpringboot, SiCplusplus
} from "react-icons/si";
import { FaJava, FaGitAlt, FaGithub } from "react-icons/fa6";
import { TbApi } from "react-icons/tb";

const technologies = [
  { name: "Java", icon: <FaJava /> },
  { name: "Python", icon: <SiPython /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "Django", icon: <SiDjango /> },
  { name: "Spring Boot", icon: <SiSpringboot /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "React", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "REST APIs", icon: <TbApi /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
];

const TechStack = () => {
  return (
    <div className="techstack-section section-container">
      <h2>My Tech Stack</h2>
      <div className="tech-grid">
        {technologies.map((tech, i) => (
          <div className="tech-card" key={i}>
            <div className="tech-icon-wrapper">
              {tech.icon}
            </div>
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
