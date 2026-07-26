import "./styles/About.css";

const stats = [
  { value: "25%", label: "API Latency Reduced" },
  { value: "200+", label: "DSA Problems Solved" },
  { value: "27+", label: "REST APIs Built" },
  { value: "8.6", label: "CGPA" },
];

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3>About Me</h3>
        <p>
          I'm a <strong>Full Stack Developer</strong> with a backend-first
          mindset — I design and ship systems that are fast, reliable, and built
          to scale. My primary stack is <strong>Java</strong>,{" "}
          <strong>Spring Boot</strong>, and <strong>Django</strong>, with
          real-world experience delivering <strong>REST APIs</strong>, OTP
          authentication, and <strong>PostgreSQL</strong>-backed services —
          reducing API latency by 25% during my internship at Netpy Technologies.
        </p>
        <p>
          On the frontend, I work with <strong>React</strong> and{" "}
          <strong>TypeScript</strong>, focusing on clean component architecture
          and smooth user experiences. Across the full delivery pipeline, I'm
          comfortable with database design, <strong>Docker</strong>-based
          deployments, <strong>Git</strong> workflows, REST API design patterns,
          and production releases — end to end.
        </p>
        <p>
          I've solved 200+ Data Structures &amp; Algorithms problems in Java
          and C++, which sharpens how I approach performance and trade-offs in
          real systems. I hold a B.E. in Computer Science from SEACET,
          Bengaluru (CGPA&nbsp;8.6), and I'm{" "}
          <span className="about-status">open to opportunities</span>.
        </p>

        <div className="about-stats">
          {stats.map((s) => (
            <div className="about-stat" key={s.label}>
              <span className="about-stat-value">{s.value}</span>
              <span className="about-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
