import React from "react";
import logo from "../assets/svg/logo.svg";
import { useMediaQuery } from "react-responsive";

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
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 660px)"
  });
  const isMobile = useMediaQuery({
    query: "(max-device-width: 660px)"
  });
  return (
    <div className="navbar">
      {isMobile && (
        <>
          <div className="left leftMobile">
            <span onClick={scrollHome}>
              <img className="logo logoMobile" src={logo} alt="logo" />
            </span>
          </div>
        </>
      )}
      {isDesktop && (
        <>
          <div className="left leftDesktop">
            <span onClick={scrollHome}>
              <img className="logo logoDesktop" src={logo} alt="logo" />
            </span>
          </div>
          <div className="right rightDesktop">
            <ul className="links linksDesktop">
              <li className="link linkDesktop">
                <span id="homeButton" onClick={scrollHome}>
                  HOME
                </span>
              </li>
              <li className="link linkDesktop">
                <span id="aboutButton" onClick={scrollAbout}>
                  ABOUT
                </span>
              </li>
              <li className="link linkDesktop">
                <span id="contactsButton" onClick={scrollContacts}>
                  CONTACTS
                </span>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
