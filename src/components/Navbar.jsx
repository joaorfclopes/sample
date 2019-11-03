import React from "react";
import logo from "../assets/svg/logo.svg";
import { useMediaQuery } from "react-responsive";

function scrollHome() {
  const homeButton = document.getElementById("homeButton");
  const aboutButton = document.getElementById("aboutButton");
  const contactsButton = document.getElementById("contactsButton");
  homeButton.classList.add("active");
  aboutButton.classList.remove("active");
  contactsButton.classList.remove("active");

  const view = document.getElementById("home");
  view.scrollIntoView();

  try {
    closeNav();
  } catch (error) {}
}
function scrollAbout() {
  const homeButton = document.getElementById("homeButton");
  const aboutButton = document.getElementById("aboutButton");
  const contactsButton = document.getElementById("contactsButton");
  homeButton.classList.remove("active");
  aboutButton.classList.add("active");
  contactsButton.classList.remove("active");

  const view = document.getElementById("about");
  view.scrollIntoView();

  try {
    closeNav();
  } catch (error) {}
}
function scrollContacts() {
  const homeButton = document.getElementById("homeButton");
  const aboutButton = document.getElementById("aboutButton");
  const contactsButton = document.getElementById("contactsButton");
  homeButton.classList.remove("active");
  aboutButton.classList.remove("active");
  contactsButton.classList.add("active");

  const view = document.getElementById("contacts");
  view.scrollIntoView();

  try {
    closeNav();
  } catch (error) {}
}

function isAtHomeMobile() {
  if (window.scrollY < 500) {
    const homeButton = document.getElementById("homeButton");
    const aboutButton = document.getElementById("aboutButton");
    const contactsButton = document.getElementById("contactsButton");
    homeButton.classList.add("active");
    aboutButton.classList.remove("active");
    contactsButton.classList.remove("active");
  }
}
function isAtAboutMobile() {
  if (window.scrollY >= 500 && window.scrollY < 1000) {
    const homeButton = document.getElementById("homeButton");
    const aboutButton = document.getElementById("aboutButton");
    const contactsButton = document.getElementById("contactsButton");
    homeButton.classList.remove("active");
    aboutButton.classList.add("active");
    contactsButton.classList.remove("active");
  }
}
function isAtContactsMobile() {
  if (window.scrollY >= 1000) {
    const homeButton = document.getElementById("homeButton");
    const aboutButton = document.getElementById("aboutButton");
    const contactsButton = document.getElementById("contactsButton");
    homeButton.classList.remove("active");
    aboutButton.classList.remove("active");
    contactsButton.classList.add("active");
  }
}

function isAtHomeDesktop() {
  if (window.scrollY < 500) {
    const homeButton = document.getElementById("homeButton");
    const aboutButton = document.getElementById("aboutButton");
    const contactsButton = document.getElementById("contactsButton");
    homeButton.classList.add("active");
    aboutButton.classList.remove("active");
    contactsButton.classList.remove("active");
  }
}
function isAtAboutDesktop() {
  if (window.scrollY >= 500 && window.scrollY < 1500) {
    const homeButton = document.getElementById("homeButton");
    const aboutButton = document.getElementById("aboutButton");
    const contactsButton = document.getElementById("contactsButton");
    homeButton.classList.remove("active");
    aboutButton.classList.add("active");
    contactsButton.classList.remove("active");
  }
}
function isAtContactsDesktop() {
  if (window.scrollY >= 1500) {
    const homeButton = document.getElementById("homeButton");
    const aboutButton = document.getElementById("aboutButton");
    const contactsButton = document.getElementById("contactsButton");
    homeButton.classList.remove("active");
    aboutButton.classList.remove("active");
    contactsButton.classList.add("active");
  }
}

function openNav() {
  document.getElementById("sidenav").style.width = "100%";
}
function closeNav() {
  document.getElementById("sidenav").style.width = "0";
}

export default function Navbar() {
  const isMobile = useMediaQuery({
    query: "(max-device-width: 1190px)"
  });
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1190px)"
  });

  if (isMobile) {
    window.addEventListener("scroll", function() {
      isAtHomeMobile();
      isAtAboutMobile();
      isAtContactsMobile();
    });
  } else {
    window.addEventListener("scroll", function() {
      isAtHomeDesktop();
      isAtAboutDesktop();
      isAtContactsDesktop();
    });
  }

  return (
    <div className="navbar">
      {isMobile && (
        <>
          <div className="left leftMobile">
            <span onClick={scrollHome}>
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
                  <span className="active" id="homeButton" onClick={scrollHome}>
                    HOME
                  </span>
                </li>
                <li className="link linkMobile">
                  <span id="aboutButton" onClick={scrollAbout}>
                    ABOUT
                  </span>
                </li>
                <li className="link linkMobile">
                  <span id="contactsButton" onClick={scrollContacts}>
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
            <span onClick={scrollHome}>
              <img className="logo logoDesktop" src={logo} alt="logo" />
            </span>
          </div>
          <div className="right rightDesktop">
            <ul className="links linksDesktop">
              <li className="link linkDesktop">
                <span className="active" id="homeButton" onClick={scrollHome}>
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
