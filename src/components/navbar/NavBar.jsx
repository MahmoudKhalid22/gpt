import React, { useState } from "react";

import "./navbar.css";
import { RiMenu3Line, RiCloseLine, RiLightbulbFill } from "react-icons/ri";
import { BsMoonStarsFill } from "react-icons/bs";
import logo from "../../assets/logo.svg";

const Menu = () => (
  <>
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
  </>
);
const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleMode, setToggleMode] = useState(true);
  return (
    <div className="gpt">
      <div className="links">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="container">
          <Menu />
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
            transition="1s"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            transition="1s"
            size={27}
            onClick={() => {
              setToggleMenu(true);
            }}
          />
        )}
        {toggleMenu && (
          <div className="menu-container scale-up-center">
            <div className="menu_container_links">
              <Menu />
              <div className="menu-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="mode">
        {toggleMode ? (
          <RiLightbulbFill
            color="#fff"
            transition="1s"
            size={27}
            onClick={() => {
              setToggleMode(false);
            }}
          />
        ) : (
          <BsMoonStarsFill
            color="#fff"
            transition="1s"
            size={27}
            onClick={() => {
              setToggleMode(true);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default NavBar;
