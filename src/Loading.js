import React from "react";
import BlackLogo from "./Components/BlackLogo.png";
import "./Loading.css";
// import loading from "./loading-buffering.gif";
import loading from "./unnamed.gif";

function Loading() {
  return (
    <div className="loading">
      <div className="loading_container">
        <div className="loading_logo">
          <img src={BlackLogo} alt="Logo" />
        </div>
        <div className="loading_icon">
          <div className="icon_loading">
            <img src={loading} alt="" />
            {/* <div className="gradient_loading"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
