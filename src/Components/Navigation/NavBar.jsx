import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";

// Assets import
import Logo from "../Assets/Logo.png";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navigation">
      {/* Logo Section */}
      <div className="right-sec">
        <div className="logo-container">
          <img src={Logo} alt="logo" />
        </div>
      </div>

      {/* Hamburger Menu Icon */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Links */}
      <section className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <div>
          <Link to="/hoskadev-task" className="link" onClick={toggleMenu}>
            الرئيسية
          </Link>
        </div>
        <div>
          <Link to="/hoskadev-task" className="link" onClick={toggleMenu}>
            الدورات
          </Link>
        </div>
        <div>
          <Link className="link" onClick={toggleMenu}>
            المقالات
          </Link>
        </div>
      </section>

      {/* Buttons Section */}
      <section className={`left-sec ${isMenuOpen ? "active" : ""}`}>
        <button className="btn btn1" onClick={toggleMenu}>
          دخول
        </button>
        <button className="btn btn2" onClick={toggleMenu}>
          تسجيل
        </button>
      </section>
    </header>
  );
}

export default NavBar;
