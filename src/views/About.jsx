import React from "react";
import ReactDelayRender from "react-delay-render";
import $ from "jquery";

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

function About() {
  return <div className="about view"></div>;
}

export default ReactDelayRender({ delay: 2000 })(About);
