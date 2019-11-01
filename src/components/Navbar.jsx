import React from "react";
import logo from "../assets/svg/logo.svg";

function scrollHome() {
  document.getElementById("home").scrollIntoView();
}
function scrollAbout() {
  document.getElementById("about").scrollIntoView();
}
function scrollContacts() {
  document.getElementById("contacts").scrollIntoView();
}

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
            <span onClick={scrollHome}>HOME</span>
          </li>
          <li className="link">
            <span onClick={scrollAbout}>ABOUT</span>
          </li>
          <li className="link">
            <span onClick={scrollContacts}>CONTACTS</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
