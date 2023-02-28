import React from "react";
import "./possibility.css";
import possibilityImage from "../../assets/possibility.png";

function Possibility() {
  return (
    <div className="section-padding" id="possibility">
      <div className="poss">
        <div className="possibility-img">
          <img src={possibilityImage} alt="possibility" />
        </div>
        <div className="possibility_content">
          <h4 className="one">Request Early Access to Get Started</h4>
          <h1 className="gradint-text">
            The possibilities are beyond your imagination
          </h1>
          <p className="first">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <h4 className="second">Request Early Access to Get Started</h4>
        </div>
      </div>
    </div>
  );
}

export default Possibility;
