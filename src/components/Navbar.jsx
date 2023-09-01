import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="navbar-logo">
          My Portfolio
        </Link>
        <div className="navbar-links">
        <Link to="/" className="navbar-link">
            Home
          </Link>
          <Link to="/about" className="navbar-link">
            About
          </Link>
          <Link to="/projects" className="navbar-link">
            Projects
          </Link>
          <Link to="/resume" className="navbar-link">
            Resume
          </Link>
          <Link to="/blog" className="navbar-link">
            Blog
          </Link>
          <Link to="/contact" className="navbar-link">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
