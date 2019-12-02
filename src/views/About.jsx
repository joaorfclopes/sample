import React from "react";
import $ from "jquery";
import { useMediaQuery } from "react-responsive";
import ProgressiveImage from "react-progressive-image";
import pilot1 from "../assets/images/about/pilot1.jpg";
import pilot1Small from "../assets/images/about/pilot1Small.jpg";
import pilot2 from "../assets/images/about/pilot2.jpg";
import pilot2Small from "../assets/images/about/pilot2Small.jpg";
import pilot3 from "../assets/images/about/pilot3.jpg";
import pilot3Small from "../assets/images/about/pilot3Small.jpg";
import pilot4 from "../assets/images/about/pilot4.jpg";
import pilot4Small from "../assets/images/about/pilot4Small.jpg";
import Fade from "react-reveal/Fade";

function activeAbout() {
  $("#homeButton").removeClass("active");
  $("#aboutButton").addClass("active");
  $("#contactsButton").removeClass("active");
}

$(window).scroll(function() {
  try {
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
  } catch (error) {}
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
            <Fade top>
              <h1 className="aboutTitle aboutTitleDesktop">About Us</h1>
            </Fade>
            <Fade bottom cascade>
              <div className="pilotsContainer pilotsContainerDesktop">
                <div className="pilot pilotDesktop pilot1">
                  <ProgressiveImage
                    className="progressiveImage progressiveImageDesktop"
                    src={pilot1}
                    placeholder={pilot1Small}
                  >
                    {src => (
                      <div className="pilotContainer pilotContainerDesktop">
                        <img
                          className="imagePilot imagePilotDesktop"
                          src={src}
                          alt="pilot1"
                        />
                      </div>
                    )}
                  </ProgressiveImage>
                </div>
                <div className="pilot pilotDesktop pilot2">
                  <ProgressiveImage
                    className="progressiveImage progressiveImageDesktop"
                    src={pilot2}
                    placeholder={pilot2Small}
                  >
                    {src => (
                      <div className="pilotContainer pilotContainerDesktop">
                        <img
                          className="imagePilot imagePilotDesktop"
                          src={src}
                          alt="pilot2"
                        />
                      </div>
                    )}
                  </ProgressiveImage>
                </div>
                <div className="pilot pilotDesktop pilot3">
                  <ProgressiveImage
                    className="progressiveImage progressiveImageDesktop"
                    src={pilot3}
                    placeholder={pilot3Small}
                  >
                    {src => (
                      <div className="pilotContainer pilotContainerDesktop">
                        <img
                          className="imagePilot imagePilotDesktop"
                          src={src}
                          alt="pilot3"
                        />
                      </div>
                    )}
                  </ProgressiveImage>
                </div>
                <div className="pilot pilotDesktop pilot4">
                  <ProgressiveImage
                    className="progressiveImage progressiveImageDesktop"
                    src={pilot4}
                    placeholder={pilot4Small}
                  >
                    {src => (
                      <div className="pilotContainer pilotContainerDesktop">
                        <img
                          className="imagePilot imagePilotDesktop"
                          src={src}
                          alt="pilot4"
                        />
                      </div>
                    )}
                  </ProgressiveImage>
                </div>
              </div>
            </Fade>
          </div>
        </>
      )}
    </div>
  );
}
