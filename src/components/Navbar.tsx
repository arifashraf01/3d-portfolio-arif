import HoverLinks from "./HoverLinks";
import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="header">
      <ul>
        <li>
          <a href="#about" aria-label="About Section">
            <HoverLinks text="ABOUT" />
          </a>
        </li>
        <li>
          <a href="#work" aria-label="Projects Section">
            <HoverLinks text="WORK" />
          </a>
        </li>
        <li>
          <a href="#contact" aria-label="Contact Section">
            <HoverLinks text="CONTACT" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
