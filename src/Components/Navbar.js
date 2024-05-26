import React from "react";
import "./Navbar.css";
import BlackLogo from "./BlackLogo.png";
import WhiteLogo from "./WhiteLogo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_container">
        <div className="navbar_left">
          <img className="logo" src={BlackLogo} alt="logo" />
          <p>Chitthi</p>
        </div>
        <div className="navbar_center">
          <Link className="navlink" to="/">
            Home
          </Link>
          <Link className="navlink" to="/about">
            About Us
          </Link>
          <Link className="navlink" to="/contact">
            Contact Us
          </Link>
          <Link className="navlink" to="/login">
            Login
          </Link>
          {/* <Link className="navlink" to="/mainapp">
            Main App
          </Link> */}
        </div>
      </div>
      <div className="navbar_right">
        <Link to="/mainapp">
          <button className="app_btn">
            <img className="logo_btn" src={WhiteLogo} alt="logo" /> GET IN APP
          </button>
        </Link>
      </div>
      <div className="gradient_App"></div>
    </div>
  );
}

export default Navbar;
