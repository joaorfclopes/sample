import React from "react";
import $ from "jquery";
import { useMediaQuery } from "react-responsive";

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
            <h1>About</h1>
          </div>
        </>
      )}
    </div>
  );
}
