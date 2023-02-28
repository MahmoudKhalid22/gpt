import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";

function Footer() {
  return (
    <div className="footer section-padding">
      <div className="footer-heading">
        <h1 className="gradint-text">
          Do you want to step in to the future before others
        </h1>
      </div>
      <button>Request Early Access</button>
      <div className="end">
        <div className="left">
          <a href="#home">
            <img src={logo} alt="logo" />
          </a>
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        {/* 01 */}
        <div className="footer_container">
          <ul>
            <h3>Links</h3>
            <li>
              <a href="#">Overons</a>
            </li>
            <li>
              <a href="#">Social Media</a>
            </li>
            <li>
              <a href="#">Counters</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          {/* 02 */}
          <ul>
            <h3>Company</h3>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          {/* 03 */}
          <ul>
            <h3>Get in touch</h3>
            <li className="exception">
              <a href="#">Crechterwoord K12 182 DK Alknjkcb</a>
            </li>
            <li>
              <a href="#">085-132567</a>
            </li>
            <li>
              <a href="#">info@payme.net</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
