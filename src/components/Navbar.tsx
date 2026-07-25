import { useState, useEffect } from "react";
import HoverLinks from "./HoverLinks";
import "./styles/Navbar.css";

const NAV_LINKS = [
  { href: "#about", label: "About Section", text: "ABOUT" },
  { href: "#work", label: "Projects Section", text: "WORK" },
  { href: "#skills", label: "Skills Section", text: "SKILLS" },
  { href: "#contact", label: "Contact Section", text: "CONTACT" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on scroll or resize
  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener("scroll", close, { passive: true });
    window.addEventListener("resize", close, { passive: true });
    return () => {
      window.removeEventListener("scroll", close);
      window.removeEventListener("resize", close);
    };
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className="header">
      {/* Desktop nav */}
      <nav className="header-nav" aria-label="Main navigation">
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} aria-label={link.label}>
                <HoverLinks text={link.text} />
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile hamburger */}
      <button
        className={`hamburger${menuOpen ? " is-open" : ""}`}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="mobile-overlay"
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <nav
        className={`mobile-nav${menuOpen ? " is-open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} aria-label={link.label} onClick={handleNavClick}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
