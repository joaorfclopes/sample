import React from "react";
import logo from "../assets/svg/logo.svg";
import { useMediaQuery } from "react-responsive";
import Fade from "react-reveal/Fade";
import $ from "jquery";

function openNav() {
  document.getElementById("sidenav").style.width = "100%";
}
function closeNav() {
  document.getElementById("sidenav").style.width = "0";
}

function activeHome() {
  $("#homeButton").addClass("active");
  $("#aboutButton").removeClass("active");
  $("#contactsButton").removeClass("active");
}
function activeAbout() {
  $("#homeButton").removeClass("active");
  $("#aboutButton").addClass("active");
  $("#contactsButton").removeClass("active");
}
function activeContacts() {
  $("#homeButton").removeClass("active");
  $("#aboutButton").removeClass("active");
  $("#contactsButton").addClass("active");
}

$(window).scroll(function() {
  const distanceHome = $(".home").offset().top;
  const distanceAbout = $(".about").offset().top;
  const distanceContacts = $(".contacts").offset().top;
  if (
    $(window).scrollTop() >= distanceHome - 300 &&
    $(window).scrollTop() <= distanceAbout - 300 &&
    $(window).scrollTop() <= distanceContacts - 300
  ) {
    activeHome();
  } else if (
    $(window).scrollTop() >= distanceHome - 300 &&
    $(window).scrollTop() >= distanceAbout - 300 &&
    $(window).scrollTop() <= distanceContacts - 300
  ) {
    activeAbout();
  } else if (
    $(window).scrollTop() >= distanceHome - 300 &&
    $(window).scrollTop() >= distanceAbout - 300 &&
    $(window).scrollTop() >= distanceContacts - 300
  ) {
    activeContacts();
  }
});

function scrollHome() {
  $("html, body").animate(
    {
      scrollTop: $(".home").offset().top
    },
    1000
  );
  try {
    closeNav();
  } catch (error) {}
}
function scrollAbout() {
  $("html, body").animate(
    {
      scrollTop: $(".about").offset().top
    },
    1000
  );
  try {
    closeNav();
  } catch (error) {}
}
function scrollContacts() {
  $("html, body").animate(
    {
      scrollTop: $(".contacts").offset().top
    },
    1000
  );

  try {
    closeNav();
  } catch (error) {}
}

export default function Navbar() {
  const isMobile = useMediaQuery({
    query: "(max-device-width: 1190px)"
  });
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1190px)"
  });

  return (
    <Fade top>
      <div className="navbar">
        {isMobile && (
          <>
            <div className="left leftMobile">
              <span>
                <img className="logo logoMobile" src={logo} alt="logo" />
              </span>
            </div>
            <div className="right rightMobile">
              <div className="navbarMobile" onClick={openNav}>
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
                      onClick={scrollHome}
                    >
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
              <span>
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
    </Fade>
  );
}
