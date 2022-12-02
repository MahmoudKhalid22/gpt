import React, { useState } from "react";

import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt">
      <div className="links">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#gpt3">What is GPT3?</a>
          </p>
          <p>
            <a href="#ai">Open AI</a>
          </p>
          <p>
            <a href="#feature">Case Studies</a>
          </p>
          <p>
            <a href="#blog">Library</a>
          </p>
        </div>
      </div>
      <div className="sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => {
              setToggleMenu(true);
            }}
          />
        )}
      </div>
      <div className="mode"></div>
    </div>
  );
};

export default NavBar;
