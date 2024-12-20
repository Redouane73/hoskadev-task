import React from "react";
import "./CopyRight.css";

// Asset imports
import Frame from "../Assets/Frame 239.png";

function CopyRight() {
  return (
    // CopyRight section
    <div className="copy-right">
      <div className="right-section">
        <p>جميع الحقوق محفوظة في هوسكا التعليمية 2024</p>
      </div>
      <div className="left-section">
        <img src={Frame} alt="hoskadev-copyright" />
      </div>
    </div>
  );
}

export default CopyRight;
