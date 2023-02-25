import React from "react";
import "./feature.css";
const Feature = ({ title, text }) => {
  return (
    <div className="gpt_features-container_feature">
      <div className="gpt_features-featureTitle">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="gpt_container-featureText normal-text">{text}</div>
    </div>
  );
};
export default Feature;
