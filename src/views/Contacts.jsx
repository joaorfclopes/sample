import React from "react";
import $ from "jquery";
import { useMediaQuery } from "react-responsive";
import ReactDelayRender from "react-delay-render";
import Slide from "react-reveal/Slide";

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
            <div className="wave-container">
              <h1 className="aboutTitleMobile">Contact Us</h1>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#111"
                  fillOpacity="1"
                  d="M0,64L48,80C96,96,192,128,288,149.3C384,171,480,181,576,165.3C672,149,768,107,864,80C960,53,1056,43,1152,42.7C1248,43,1344,53,1392,58.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
              <div className="contactsContainerMobile"></div>
            </div>
          </div>
        </>
      )}
      {isDesktop && (
        <>
          <Slide bottom>
            <div className="contactsDesktop">
              <div className="wave-container">
                <h1 className="aboutTitleDesktop">Contact Us</h1>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="#111"
                    fillOpacity="1"
                    d="M0,64L48,80C96,96,192,128,288,149.3C384,171,480,181,576,165.3C672,149,768,107,864,80C960,53,1056,43,1152,42.7C1248,43,1344,53,1392,58.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
                <div className="contactsContainerDesktop"></div>
              </div>
            </div>
          </Slide>
        </>
      )}
    </div>
  );
}

export default ReactDelayRender({ delay: 1500 })(Contacts);
