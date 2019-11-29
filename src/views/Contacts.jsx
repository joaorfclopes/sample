import React from "react";
import ReactDelayRender from "react-delay-render";
import $ from "jquery";

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
    $(window).scrollTop() >= distanceAbout - 300 &&
    $(window).scrollTop() >= distanceContacts - 300
  ) {
    activeContacts();
  }
});

function Contacts() {
  return <div className="contacts view"></div>;
}

export default ReactDelayRender({ delay: 2000 })(Contacts);
