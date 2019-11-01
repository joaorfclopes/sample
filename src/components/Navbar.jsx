import React from "react";
import logo from "../assets/svg/logo.svg";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <a href="#home">
          <img className="logo" src={logo} alt="logo" />
        </a>
      </div>
      <div className="right">
        <ul className="links">
          <li className="link">
            <a href="#home" className="home">
              HOME
            </a>
          </li>
          <li className="link">
            <a href="#about" className="about">
              ABOUT
            </a>
          </li>
          <li className="link">
            <a href="#contacts" className="contacts">
              CONTACTS
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
