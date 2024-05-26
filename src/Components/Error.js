import React from "react";
import "./Error.css";
import BlackLogo from "./BlackLogo.png";
import WhiteLogo from "./WhiteLogo.png";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error_container">
      <div className="error_subcontainer">
        <div className="error_logo">
          <img src={BlackLogo} alt="Chitthi Logo" />
        </div>
        <div className="error_information">
          <h1>Oops, something went wrong</h1>
          <h3>Check your URL and try again</h3>
          <h5>We couldn’t find the page you’re looking for.</h5>
        </div>
        <div className="error_buttons">
          <Link to="/">
            <button className="app_btn error_btn">
              <img className="logo_btn" src={WhiteLogo} alt="logo" /> GO TO HOME
              PAGE
            </button>
          </Link>
          <Link to="/mainapp">
            <button className="app_btn error_btn ">
              <img className="logo_btn" src={WhiteLogo} alt="logo" /> GET IN APP
            </button>
          </Link>
        </div>
      </div>
      <div className="gradient41 hue_shift "></div>
      <div className="gradient42 hue_shift "></div>
      <div className="gradient43 hue_shift "></div>
      <div className="gradient44 hue_shift "></div>
      <div className="gradient45 hue_shift "></div>

    </div>
  );
}

export default Error;
