import React from "react";
import $ from "jquery";
import { useMediaQuery } from "react-responsive";
/*import { Card, CardGroup } from "react-bootstrap";
import ProgressiveImage from "react-progressive-image";
import pilot1 from "../assets/images/about/pilot1.jpg";
import pilot2 from "../assets/images/about/pilot2.jpg";
import pilot3 from "../assets/images/about/pilot3.jpg";
import pilot4 from "../assets/images/about/pilot4.jpg";*/

function activeAbout() {
  $("#homeButton").removeClass("active");
  $("#aboutButton").addClass("active");
  $("#contactsButton").removeClass("active");
}

$(window).scroll(function() {
  const distanceHome = $(".home").offset().top;
  const distanceAbout = $(".about").offset().top;
  const distanceContacts = $(".contacts").offset().top;
  if (
    $(window).scrollTop() >= distanceHome - 300 &&
    $(window).scrollTop() >= distanceAbout - 300 &&
    $(window).scrollTop() <= distanceContacts - 300
  ) {
    activeAbout();
  }
});

export default function About() {
  const isMobile = useMediaQuery({
    query: "(max-device-width: 700px)"
  });
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 700px)"
  });

  return (
    <div className="about view">
      {isMobile && (
        <>
          <div className="aboutMobile">
            <h1>About</h1>
          </div>
        </>
      )}
      {isDesktop && (
        <>
          <div className="aboutDesktop">
            <h1 className="aboutTitle aboutTitleDesktop">About Us</h1>
            <div className="pilotsContainer pilotsContainerDesktop">
              <div className="pilot pilot1"></div>
              <div className="pilot pilot2"></div>
              <div className="pilot pilot3"></div>
              <div className="pilot pilot4"></div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
