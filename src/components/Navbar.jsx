import logo from "../assets/bna-logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="BNA Logo" className="logo" />

      <div className="nav-pill">
        <a href="#">HOME</a>
        <a href="#">ABOUT US</a>
        <a href="#">PROJECTS</a>
        <a href="#">SERVICES</a>

        <a href="tel:+966509184704" className="call-btn">
          <span>CALL US!</span>
          <span>+966 50 918 4704</span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;