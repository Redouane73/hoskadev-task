import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/Logo.png";
import "./NavBar.css";

function NavBar() {
  // const  = {
  //   textDecoration: "none",
  //   display: "flex",
  //   alignItems: "center",
  //   color: "white",
  //   gap: "0.5rem",
  // };
  return (
    <>
      <header className="navigation">
        <div className="right-sec">
          <div className="logo-container">
            <img src={Logo} alt="logo" />
          </div>
        </div>
        <div className="links">
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
        </div>
        <div className="left-sec">
          <button href="#" className="btn btn1">
            دخول
          </button>
          <button href="#" className="btn btn2">
            تسجيل
          </button>
        </div>
      </header>
    </>
  );
}

export default NavBar;
