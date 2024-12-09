import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/Logo.png";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <header className="navigation">
        <section className="right-sec">
          <div className="logo-container">
            <img src={Logo} alt="logo" />
          </div>
        </section>
        <section className="links nav-links ">
          <div>
            <Link to="/hoskadev-task" className="link">
              الرئيسية
            </Link>
          </div>
          <div className="link-div">
            <Link to="/hoskadev-task" className="link">
              الدورات
            </Link>
          </div>
          <div>
            <Link to="/Blogs" className="link">
              المقالات
            </Link>
          </div>
        </section>
        <section className="left-sec">
          <button href="#" className="btn btn1">
            دخول
          </button>
          <button href="#" className="btn btn2">
            تسجيل
          </button>
        </section>
      </header>
    </>
  );
}

export default NavBar;
