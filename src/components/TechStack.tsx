import "./styles/TechStack.css";

const baseUrl = import.meta.env.BASE_URL;
const technologies = [
  { name: "React", icon: `${baseUrl}images/react2.webp` },
  { name: "Next.js", icon: `${baseUrl}images/next2.webp` },
  { name: "Node.js", icon: `${baseUrl}images/node2.webp` },
  { name: "Express", icon: `${baseUrl}images/express.webp` },
  { name: "MongoDB", icon: `${baseUrl}images/mongo.webp` },
  { name: "MySQL", icon: `${baseUrl}images/mysql.webp` },
  { name: "TypeScript", icon: `${baseUrl}images/typescript.webp` },
  { name: "JavaScript", icon: `${baseUrl}images/javascript.webp` },
];

const TechStack = () => {
  return (
    <div className="techstack-section section-container">
      <h2>My Tech Stack</h2>
      <div className="tech-grid">
        {technologies.map((tech, i) => (
          <div className="tech-card" key={i}>
            <div className="tech-icon-wrapper">
              <img src={tech.icon} alt={tech.name} loading="lazy" decoding="async" />
            </div>
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
