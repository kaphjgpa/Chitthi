import React from "react";
import "./InfoBox.css";

function InfoBox({ title, total }) {
  return (
    <div className="infoBox">
      <h3 className="infoBox_title">{title}</h3>
      {/* <h2 className="infoBox_cases">{cases}</h2> */}
      <h4 className="infoBox_total">{total}</h4>
    </div>
  );
}

export default InfoBox;
