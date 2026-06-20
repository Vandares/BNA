import { useState } from "react";
import logo from "../assets/bna-logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <img src={logo} alt="BNA Logo" className="logo" />

      <button
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-pill ${menuOpen ? "open" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>
          HOME
        </a>

        <a href="#about" onClick={() => setMenuOpen(false)}>
          ABOUT US
        </a>

        <a href="#projects" onClick={() => setMenuOpen(false)}>
          PROJECTS
        </a>

        <a href="#services" onClick={() => setMenuOpen(false)}>
          SERVICES
        </a>

        <a
          href="tel:+966509184704"
          className="call-btn"
          onClick={() => setMenuOpen(false)}
        >
          <span>CALL US!</span>
          <span>+966 50 918 4704</span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;