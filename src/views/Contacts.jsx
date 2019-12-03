import React from "react";
import $ from "jquery";
import { useMediaQuery } from "react-responsive";
import ReactDelayRender from "react-delay-render";

function activeContacts() {
  $("#homeButton").removeClass("active");
  $("#aboutButton").removeClass("active");
  $("#contactsButton").addClass("active");
}

$(window).scroll(function() {
  try {
    const distanceHome = $(".home").offset().top;
    const distancecontacts = $(".contacts").offset().top;
    const distanceContacts = $(".contacts").offset().top;
    if (
      $(window).scrollTop() >= distanceHome - 300 &&
      $(window).scrollTop() >= distancecontacts - 300 &&
      $(window).scrollTop() >= distanceContacts - 300
    ) {
      activeContacts();
    }
  } catch (error) {}
});

function Contacts() {
  const isMobile = useMediaQuery({
    query: "(max-device-width: 700px)"
  });
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 700px)"
  });

  return (
    <div className="contacts view">
      {isMobile && (
        <>
          <div className="contactsMobile">
            <h1>Contacts</h1>
          </div>
        </>
      )}
      {isDesktop && (
        <>
          <div className="contactsDesktop">
            <h1>Contacts</h1>
          </div>
        </>
      )}
    </div>
  );
}

export default ReactDelayRender({ delay: 1500 })(Contacts);