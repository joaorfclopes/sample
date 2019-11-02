import React from "react";
import logo from "../assets/svg/logo.svg";
import { useMediaQuery } from "react-responsive";

function isAtHome() {
  if (window.scrollY < 500) {
    const homeButton = document.getElementById("homeButton");
    const aboutButton = document.getElementById("aboutButton");
    const contactsButton = document.getElementById("contactsButton");
    homeButton.classList.add("active");
    aboutButton.classList.remove("active");
    contactsButton.classList.remove("active");
  }
}
function isAtAbout() {
  if (window.scrollY >= 500 && window.scrollY < 1500) {
    const homeButton = document.getElementById("homeButton");
    const aboutButton = document.getElementById("aboutButton");
    const contactsButton = document.getElementById("contactsButton");
    homeButton.classList.remove("active");
    aboutButton.classList.add("active");
    contactsButton.classList.remove("active");
  }
}
function isAtContacts() {
  if (window.scrollY >= 1500) {
    const homeButton = document.getElementById("homeButton");
    const aboutButton = document.getElementById("aboutButton");
    const contactsButton = document.getElementById("contactsButton");
    homeButton.classList.remove("active");
    aboutButton.classList.remove("active");
    contactsButton.classList.add("active");
  }
}

window.addEventListener("scroll", function() {
  isAtHome();
  isAtAbout();
  isAtContacts();
});

function openNav() {
  document.getElementById("sidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("sidenav").style.width = "0";
}

function scrollHomeMobile() {
  const view = document.getElementById("home");
  view.scrollIntoView();
  closeNav();
}
function scrollAboutMobile() {
  const view = document.getElementById("about");
  view.scrollIntoView();
  closeNav();
}
function scrollContactsMobile() {
  const view = document.getElementById("contacts");
  view.scrollIntoView();
  closeNav();
}

function scrollHomeDesktop() {
  const homeButton = document.getElementById("homeButton");
  const aboutButton = document.getElementById("aboutButton");
  const contactsButton = document.getElementById("contactsButton");
  homeButton.classList.add("active");
  aboutButton.classList.remove("active");
  contactsButton.classList.remove("active");

  const view = document.getElementById("home");
  view.scrollIntoView();
}
function scrollAboutDesktop() {
  const homeButton = document.getElementById("homeButton");
  const aboutButton = document.getElementById("aboutButton");
  const contactsButton = document.getElementById("contactsButton");
  homeButton.classList.remove("active");
  aboutButton.classList.add("active");
  contactsButton.classList.remove("active");

  const view = document.getElementById("about");
  view.scrollIntoView();
}
function scrollContactsDesktop() {
  const homeButton = document.getElementById("homeButton");
  const aboutButton = document.getElementById("aboutButton");
  const contactsButton = document.getElementById("contactsButton");
  homeButton.classList.remove("active");
  aboutButton.classList.remove("active");
  contactsButton.classList.add("active");

  const view = document.getElementById("contacts");
  view.scrollIntoView();
}

export default function Navbar() {
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 840px)"
  });
  const isMobile = useMediaQuery({
    query: "(max-device-width: 840px)"
  });
  return (
    <div className="navbar">
      {isMobile && (
        <>
          <div className="left leftMobile">
            <span onClick={scrollHomeMobile}>
              <img className="logo logoMobile" src={logo} alt="logo" />
            </span>
          </div>
          <div className="right rightMobile">
            <div className="navbarMobile" id="navbarMobileID" onClick={openNav}>
              <div className="structure bar1"></div>
              <div className="structure bar2"></div>
              <div className="structure bar3"></div>
            </div>
            <div id="sidenav" className="sidenav">
              <ul className="links linksMobile">
                <li className="link linkMobile">
                  <span
                    className="active"
                    id="homeButton"
                    onClick={scrollHomeMobile}
                  >
                    HOME
                  </span>
                </li>
                <li className="link linkMobile">
                  <span id="aboutButton" onClick={scrollAboutMobile}>
                    ABOUT
                  </span>
                </li>
                <li className="link linkMobile">
                  <span id="contactsButton" onClick={scrollContactsMobile}>
                    CONTACTS
                  </span>
                </li>
              </ul>
              <span className="closebtn" onClick={closeNav}>
                &times;
              </span>
            </div>
          </div>
        </>
      )}
      {isDesktop && (
        <>
          <div className="left leftDesktop">
            <span onClick={scrollHomeDesktop}>
              <img className="logo logoDesktop" src={logo} alt="logo" />
            </span>
          </div>
          <div className="right rightDesktop">
            <ul className="links linksDesktop">
              <li className="link linkDesktop">
                <span
                  className="active"
                  id="homeButton"
                  onClick={scrollHomeDesktop}
                >
                  HOME
                </span>
              </li>
              <li className="link linkDesktop">
                <span id="aboutButton" onClick={scrollAboutDesktop}>
                  ABOUT
                </span>
              </li>
              <li className="link linkDesktop">
                <span id="contactsButton" onClick={scrollContactsDesktop}>
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
