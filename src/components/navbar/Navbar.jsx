import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Menu = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#whpt3"> whatisGPT? </a>
      </p>
      <p>
        <a href="#possibility">OpenAI</a>
      </p>
      <p>
        <a href="#features">case studies</a>
      </p>
      <p>
        <a href="#blog">Library</a>
      </p>
    </>
  );
};

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3_navbar-logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="gpt3__navbar-links-container">
          <Menu />
        </div>

        <div className="gpt3__navbar-sign">
          <p>SignIn</p>
          <button type="submit">SignUp</button>
        </div>
        <div className="gpt3__navbar-menu">
          {toggle ? (
            <RiCloseLine
              color="white"
              size={27}
              onClick={() => setToggle(false)}
            />
          ) : (
            <RiMenu3Line
              size={27}
              color="white"
              onClick={() => setToggle(true)}
            />
          )}

          {toggle && (
            <div className="gpt3__navbar_menu-container scale-up-center">
              <div className="gpt3__navbar_menu-links">
                <Menu />
                <div className="gpt3__navbar_menu-container-links-sign">
                  <p>SignIn</p>
                  <button type="submit">SignUp</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
