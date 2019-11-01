import React from "react";
import logo from "../assets/svg/logo.svg";

function scrollHome() {
  const view = document.getElementById("home");
  const homeButton = document.getElementById("homeButton");
  const aboutButton = document.getElementById("aboutButton");
  const contactsButton = document.getElementById("contactsButton");
  view.scrollIntoView();
  homeButton.classList.add("active");
  aboutButton.classList.remove("active");
  contactsButton.classList.remove("active");
}
function scrollAbout() {
  const view = document.getElementById("about");
  const homeButton = document.getElementById("homeButton");
  const aboutButton = document.getElementById("aboutButton");
  const contactsButton = document.getElementById("contactsButton");
  view.scrollIntoView();
  homeButton.classList.remove("active");
  aboutButton.classList.add("active");
  contactsButton.classList.remove("active");
}
function scrollContacts() {
  const view = document.getElementById("contacts");
  const homeButton = document.getElementById("homeButton");
  const aboutButton = document.getElementById("aboutButton");
  const contactsButton = document.getElementById("contactsButton");
  view.scrollIntoView();
  homeButton.classList.remove("active");
  aboutButton.classList.remove("active");
  contactsButton.classList.add("active");
}

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <span onClick={scrollHome}>
          <img className="logo" src={logo} alt="logo" />
        </span>
      </div>
      <div className="right">
        <ul className="links">
          <li className="link">
            <span id="homeButton" onClick={scrollHome}>
              HOME
            </span>
          </li>
          <li className="link">
            <span id="aboutButton" onClick={scrollAbout}>
              ABOUT
            </span>
          </li>
          <li className="link">
            <span id="contactsButton" onClick={scrollContacts}>
              CONTACTS
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
