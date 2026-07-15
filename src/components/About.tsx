import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3>About Me</h3>
        <p>
          I'm a Full Stack Developer focused on building backend systems that are
          fast, reliable, and built to scale — and frontends that are clean and
          intentional. I work primarily with <strong>Java</strong>,{" "}
          <strong>Spring Boot</strong>, <strong>Django</strong>, and{" "}
          <strong>React</strong>, with hands-on experience in{" "}
          <strong>PostgreSQL</strong>, <strong>REST API</strong> design,{" "}
          <strong>Docker</strong>, and <strong>Git</strong>.
        </p>
        <p>
          Outside of product work, I enjoy solving algorithmic problems on
          LeetCode — I find it sharpens the way I think about performance and
          tradeoffs in real systems.
        </p>
      </div>
    </div>
  );
};

export default About;
