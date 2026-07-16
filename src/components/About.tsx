import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3>About Me</h3>
        <p>
          I'm a <strong>Full Stack Developer</strong> with a focus on backend
          engineering — building systems that are fast, reliable, and designed
          to scale. My core stack is <strong>Java</strong>,{" "}
          <strong>Spring Boot</strong>, and <strong>Django</strong>, with
          production experience shipping REST APIs, OTP authentication, and
          PostgreSQL-backed services at an internship where I reduced API
          latency by 25%.
        </p>
        <p>
          On the frontend, I work with <strong>React</strong> and{" "}
          <strong>TypeScript</strong>, and I care about clean component
          architecture and smooth user experiences. I'm comfortable across the
          full delivery pipeline — from database design and{" "}
          <strong>Docker</strong>-based deployments to <strong>Git</strong>{" "}
          workflows and production releases.
        </p>
        <p>
          I also enjoy solving algorithmic problems — I've worked through 200+
          Data Structures &amp; Algorithms problems in Java and C++, which
          sharpens how I think about performance and tradeoffs in real systems.
          Currently pursuing B.E. in Computer Science at SEACET, Bengaluru
          (CGPA 8.6), and <span className="about-status">open to opportunities</span>.
        </p>
      </div>
    </div>
  );
};

export default About;
