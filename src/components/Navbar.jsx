import React from "react";
import logo from "../assets/svg/logo.svg";
import { useMediaQuery } from "react-responsive";
import $ from "jquery";

function openNav() {
  document.getElementById("sidenav").style.width = "100%";
}
function closeNav() {
  document.getElementById("sidenav").style.width = "0";
}

$(window).scroll(function() {
  if ($(window).scrollTop() >= 100) {
    $(".nav").css("background-color", "#111");
    $(".navDesktop").css("height", "8vw");
    $(".logoDesktop").css("width", "10vw");
    $(".logoDesktop").css("margin", "1vw");
  } else {
    $(".nav").css("background-color", "transparent");
    $(".navDesktop").css("height", "10vw");
    $(".logoDesktop").css("width", "12vw");
    $(".logoDesktop").css("margin", "2vw");
  }
});

function scrollHome() {
  $("html, body").animate(
    {
      scrollTop: $(".home").offset().top
    },
    800
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
    800
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
    800
  );

  try {
    closeNav();
  } catch (error) {}
}

export default function Navbar() {
  const isMobile = useMediaQuery({
    query: "(max-device-width: 700px)"
  });
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 700px)"
  });

  return (
    <div>
      {isMobile && (
        <>
          <div className="nav navbar navMobile">
            <div className="left leftMobile">
              <span onClick={scrollHome} >
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
          </div>
        </>
      )}

      {isDesktop && (
        <>
          <div className="nav navbar navDesktop">
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
          </div>
        </>
      )}
    </div>
  );
}
