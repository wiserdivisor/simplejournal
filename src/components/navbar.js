import React from "react";
import { Link } from "gatsby";
import "../styles/navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navLinks">
        <div className="navLinkItem" style={{ backgroundColor: "#1e6292" }}>
          <Link to="/" className="navLinkText">
            Home
          </Link>
        </div>

        <div className="navLinkItem" style={{ backgroundColor: "#1e6292" }}>
          <Link to="/about" className="navLinkText">
            About
          </Link>
        </div>

        {/*

        <div className="navLinkItem" style={{ backgroundColor: "#1e6292" }}>
          <Link to="/guidelines" className="navLinkText">
            Guidelines
          </Link>
        </div>

        */}

        <div className="navLinkItem" style={{ backgroundColor: "#1e6292" }}>
          <Link to="/contact" className="navLinkText">
            Contact
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Navbar;
