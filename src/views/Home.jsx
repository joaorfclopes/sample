import React from "react";
import { Card } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import ProgressiveImage from "react-progressive-image";
import image1Smalll from "../assets/images/image1Small.jpg";
import image1 from "../assets/images/image1.jpg";
import image2Smalll from "../assets/images/image2Small.jpg";
import image2 from "../assets/images/image2.jpg";
import image3Smalll from "../assets/images/image3Small.jpg";
import image3 from "../assets/images/image3.jpg";
import image4Smalll from "../assets/images/image4Small.jpg";
import image4 from "../assets/images/image4.jpg";
import HomeModal from "../components/HomeModal";
import Fade from "react-reveal/Fade";
import ReactDelayRender from "react-delay-render";
import $ from "jquery";

function Home() {
  const isMobile = useMediaQuery({
    query: "(max-device-width: 700px)"
  });
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 700px)"
  });

  const [modalShow, setModalShow] = React.useState(false);

  function activeHome() {
    $("#homeButton").addClass("active");
    $("#aboutButton").removeClass("active");
    $("#contactsButton").removeClass("active");
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
    }
  });

  return (
    <div className="home view">
      {isMobile && (
        <>
          <Fade>
            <div className="homeMobile">
              <div className="homeModal">
                <HomeModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
              <Fade bottom>
                <Card
                  className="homeImage homeImageMobile"
                  onClick={() => setModalShow(true)}
                >
                  <Card.Title className="homeImageTitle">
                    Lorem ipsum
                  </Card.Title>
                  <Card.Body className="imageCard imageCardMobile">
                    <ProgressiveImage
                      className="progressiveImage progressiveImageMobile"
                      src={image1}
                      placeholder={image1Smalll}
                      delay={1000}
                    >
                      {src => (
                        <div className="imageContainer imageContainerMobile">
                          <img
                            className="image imageMobile"
                            src={src}
                            alt="image1"
                          />
                        </div>
                      )}
                    </ProgressiveImage>
                  </Card.Body>
                </Card>
              </Fade>
              <Fade bottom>
                <Card
                  className="homeImage homeImageMobile"
                  onClick={() => setModalShow(true)}
                >
                  <Card.Title className="homeImageTitle">
                    Lorem ipsum
                  </Card.Title>
                  <Card.Body className="imageCard imageCardMobile">
                    <ProgressiveImage
                      className="progressiveImage progressiveImageMobile"
                      src={image2}
                      placeholder={image2Smalll}
                      delay={1000}
                    >
                      {src => (
                        <div className="imageContainer imageContainerMobile">
                          <img
                            className="image imageMobile"
                            src={src}
                            alt="image2"
                          />
                        </div>
                      )}
                    </ProgressiveImage>
                  </Card.Body>
                </Card>
              </Fade>
              <Fade bottom>
                <Card
                  className="homeImage homeImageMobile"
                  onClick={() => setModalShow(true)}
                >
                  <Card.Title className="homeImageTitle">
                    Lorem ipsum
                  </Card.Title>
                  <Card.Body className="imageCard imageCardMobile">
                    <ProgressiveImage
                      className="progressiveImage progressiveImageMobile"
                      src={image3}
                      placeholder={image3Smalll}
                      delay={1000}
                    >
                      {src => (
                        <div className="imageContainer imageContainerMobile">
                          <img
                            className="image imageMobile"
                            src={src}
                            alt="image3"
                          />
                        </div>
                      )}
                    </ProgressiveImage>
                  </Card.Body>
                </Card>
              </Fade>
              <Fade bottom>
                <Card
                  className="homeImage homeImageMobile"
                  onClick={() => setModalShow(true)}
                >
                  <Card.Title className="homeImageTitle">
                    Lorem ipsum
                  </Card.Title>
                  <Card.Body className="imageCard imageCardMobile">
                    <ProgressiveImage
                      className="progressiveImage progressiveImageMobile"
                      src={image4}
                      placeholder={image4Smalll}
                      delay={1000}
                    >
                      {src => (
                        <div className="imageContainer imageContainerMobile">
                          <img
                            className="image imageMobile"
                            src={src}
                            alt="image4"
                          />
                        </div>
                      )}
                    </ProgressiveImage>
                  </Card.Body>
                </Card>
              </Fade>
            </div>
          </Fade>
        </>
      )}
      {isDesktop && (
        <>
          <div className="homeDesktop">
            <div className="imageContainerDesktop">
              <div className="homeLeftImage">
                <Fade left>
                  <ProgressiveImage
                    className="progressiveImage progressiveImageMobile"
                    src={image1}
                    placeholder={image1Smalll}
                    delay={1000}
                  >
                    {src => (
                      <div className="imageContainer imageContainerMobile">
                        <img
                          className="image imageMobile"
                          src={src}
                          alt="image1"
                        />
                      </div>
                    )}
                  </ProgressiveImage>
                </Fade>
              </div>
              <div className="homeRightDesc">
                <Fade right>
                  <div className="homeText">
                    <h1>Lorem ipsum</h1>
                    <h3>
                      Cras mattis consectetur purus sit amet fermentum. Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam.
                      Morbi leo risus, porta ac consectetur ac, vestibulum at
                      eros.
                    </h3>
                  </div>
                </Fade>
              </div>
            </div>
            <div className="imageContainerDesktop">
              <div className="homeLeftDesc">
                <Fade left>
                  <div className="homeText">
                    <h1>Lorem ipsum</h1>
                    <h3>
                      Cras mattis consectetur purus sit amet fermentum. Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam.
                      Morbi leo risus, porta ac consectetur ac, vestibulum at
                      eros.
                    </h3>
                  </div>
                </Fade>
              </div>
              <div className="homeRightImage">
                <Fade right>
                  <ProgressiveImage
                    className="progressiveImage progressiveImageMobile"
                    src={image2}
                    placeholder={image2Smalll}
                    delay={1000}
                  >
                    {src => (
                      <div className="imageContainer imageContainerMobile">
                        <img
                          className="image imageMobile"
                          src={src}
                          alt="image1"
                        />
                      </div>
                    )}
                  </ProgressiveImage>
                </Fade>
              </div>
            </div>
            <div className="imageContainerDesktop">
              <div className="homeLeftImage">
                <Fade left>
                  <ProgressiveImage
                    className="progressiveImage progressiveImageMobile"
                    src={image3}
                    placeholder={image3Smalll}
                    delay={1000}
                  >
                    {src => (
                      <div className="imageContainer imageContainerMobile">
                        <img
                          className="image imageMobile"
                          src={src}
                          alt="image1"
                        />
                      </div>
                    )}
                  </ProgressiveImage>
                </Fade>
              </div>
              <div className="homeRightDesc">
                <Fade right>
                  <div className="homeText">
                    <h1>Lorem ipsum</h1>
                    <h3>
                      Cras mattis consectetur purus sit amet fermentum. Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam.
                      Morbi leo risus, porta ac consectetur ac, vestibulum at
                      eros.
                    </h3>
                  </div>
                </Fade>
              </div>
            </div>
            <div className="imageContainerDesktop">
              <div className="homeLeftDesc">
                <Fade left>
                  <div className="homeText">
                    <h1>Lorem ipsum</h1>
                    <h3>
                      Cras mattis consectetur purus sit amet fermentum. Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam.
                      Morbi leo risus, porta ac consectetur ac, vestibulum at
                      eros.
                    </h3>
                  </div>
                </Fade>
              </div>
              <div className="homeRightImage">
                <Fade right>
                  <ProgressiveImage
                    className="progressiveImage progressiveImageMobile"
                    src={image4}
                    placeholder={image4Smalll}
                    delay={1000}
                  >
                    {src => (
                      <div className="imageContainer imageContainerMobile">
                        <img
                          className="image imageMobile"
                          src={src}
                          alt="image1"
                        />
                      </div>
                    )}
                  </ProgressiveImage>
                </Fade>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ReactDelayRender({ delay: 2000 })(Home);
