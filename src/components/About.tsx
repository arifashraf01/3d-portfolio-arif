import "./styles/About.css";

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
          real-world experience delivering REST APIs, OTP authentication, and{" "}
          <strong>PostgreSQL</strong>-backed services — reducing API latency by
          25% during my internship at Netpy Technologies.
        </p>
        <p>
          On the frontend I work with <strong>React</strong> and{" "}
          <strong>TypeScript</strong>, focusing on clean component architecture
          and smooth user experiences. Across the full delivery pipeline I'm
          comfortable with database design, <strong>Docker</strong>-based
          deployments, <strong>Git</strong> workflows, REST API design patterns,
          and production releases — end to end.
        </p>
        <p>
          I also enjoy solving algorithmic problems — 200+ Data Structures &amp;
          Algorithms problems in Java and C++ — which sharpens how I approach
          performance and trade-offs in real systems. Currently in my final year
          of B.E. Computer Science at SEACET, Bengaluru (CGPA&nbsp;8.6), and{" "}
          <span className="about-status">open to opportunities</span>.
        </p>
      </div>
    </div>
  );
};

export default About;
