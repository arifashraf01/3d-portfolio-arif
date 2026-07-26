import "./styles/TechStack.css";
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress,
  SiMongodb, SiMysql, SiTypescript, SiJavascript,
  SiPython, SiDjango, SiSpringboot, SiCplusplus,
  SiDocker, SiPostgresql, SiNginx, SiGithubactions,
} from "react-icons/si";
import { FaJava, FaGitAlt, FaGithub } from "react-icons/fa6";
import { TbApi } from "react-icons/tb";

const techGroups = [
  {
    category: "Languages",
    items: [
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <SiPython /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "JavaScript", icon: <SiJavascript /> },
    ],
  },
  {
    category: "Backend & Frameworks",
    items: [
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Django", icon: <SiDjango /> },
      { name: "REST APIs", icon: <TbApi /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express", icon: <SiExpress /> },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },
  {
    category: "Frontend & DevOps",
    items: [
      { name: "React", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "GH Actions", icon: <SiGithubactions /> },
      { name: "Nginx", icon: <SiNginx /> },
    ],
  },
];

const TechStack = () => {
  return (
    <div className="techstack-section section-container" id="skills">
      <div className="techstack-inner">
        <h2>My Tech Stack</h2>
        <div className="tech-groups">
          {techGroups.map((group, index) => (
            <div className="tech-category" key={index}>
              <h3>{group.category}</h3>
              <div className="tech-grid">
                {group.items.map((tech, i) => (
                  <div className="tech-card" key={i}>
                    <div className="tech-icon-wrapper">
                      {tech.icon}
                    </div>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
