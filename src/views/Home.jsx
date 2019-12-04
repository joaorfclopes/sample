import React from "react";
import { Card } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import ProgressiveImage from "react-progressive-image";
import image1Small from "../assets/images/home/image1Small.jpg";
import image1 from "../assets/images/home/image1.jpg";
import image2Small from "../assets/images/home/image2Small.jpg";
import image2 from "../assets/images/home/image2.jpg";
import image3Small from "../assets/images/home/image3Small.jpg";
import image3 from "../assets/images/home/image3.jpg";
import image4Small from "../assets/images/home/image4Small.jpg";
import image4 from "../assets/images/home/image4.jpg";
import HomeModal from "../components/HomeModal";
import Fade from "react-reveal/Fade";
import $ from "jquery";
import ReactDelayRender from "react-delay-render";

function activeHome() {
  $("#homeButton").addClass("active");
  $("#aboutButton").removeClass("active");
  $("#contactsButton").removeClass("active");
}

$(window).scroll(function() {
  try {
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
  } catch (error) {}
});

function Home() {
  const isMobile = useMediaQuery({
    query: "(max-device-width: 700px)"
  });
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 700px)"
  });

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="home view">
      {isMobile && (
        <>
          <div className="homeMobile">
            <h1 className="homeTitle homeMobileTitle">Cars</h1>
            <div className="homeModal">
              <HomeModal show={modalShow} onHide={() => setModalShow(false)} />
            </div>
            <Card className="homeImage homeImageMobile">
              <Card.Body className="imageCard imageCardMobile">
                <ProgressiveImage
                  className="progressiveImage progressiveImageMobile"
                  src={image1}
                  placeholder={image1Small}
                >
                  {src => (
                    <div className="imageContainer imageContainerMobile">
                      <img
                        onClick={() => setModalShow(true)}
                        className="image imageMobile imageMobileHome"
                        src={src}
                        alt="image1"
                      />
                      <h1 className="homeImageTitle">Lorem ipsum</h1>
                    </div>
                  )}
                </ProgressiveImage>
              </Card.Body>
            </Card>
            <Card className="homeImage homeImageMobile">
              <Card.Body className="imageCard imageCardMobile">
                <ProgressiveImage
                  className="progressiveImage progressiveImageMobile"
                  src={image2}
                  placeholder={image2Small}
                >
                  {src => (
                    <div className="imageContainer imageContainerMobile">
                      <img
                        onClick={() => setModalShow(true)}
                        className="image imageMobile imageMobileHome"
                        src={src}
                        alt="image2"
                      />
                      <h1 className="homeImageTitle">Lorem ipsum</h1>
                    </div>
                  )}
                </ProgressiveImage>
              </Card.Body>
            </Card>
            <Card className="homeImage homeImageMobile">
              <Card.Body className="imageCard imageCardMobile">
                <ProgressiveImage
                  className="progressiveImage progressiveImageMobile"
                  src={image3}
                  placeholder={image3Small}
                >
                  {src => (
                    <div className="imageContainer imageContainerMobile">
                      <img
                        onClick={() => setModalShow(true)}
                        className="image imageMobile imageMobileHome"
                        src={src}
                        alt="image3"
                      />
                      <h1 className="homeImageTitle">Lorem ipsum</h1>
                    </div>
                  )}
                </ProgressiveImage>
              </Card.Body>
            </Card>
            <Card className="homeImage homeImageMobile">
              <Card.Body className="imageCard imageCardMobile">
                <ProgressiveImage
                  className="progressiveImage progressiveImageMobile"
                  src={image4}
                  placeholder={image4Small}
                >
                  {src => (
                    <div className="imageContainer imageContainerMobile">
                      <img
                        onClick={() => setModalShow(true)}
                        className="image imageMobile imageMobileHome"
                        src={src}
                        alt="image4"
                      />
                      <h1 className="homeImageTitle">Lorem ipsum</h1>
                    </div>
                  )}
                </ProgressiveImage>
              </Card.Body>
            </Card>
          </div>
        </>
      )}
      {isDesktop && (
        <>
          <div className="homeDesktop">
            <Fade top>
              <h1 className="homeTitle homeDesktopTitle">Cars</h1>
            </Fade>
            <div className="imageContainerDesktop">
              <div className="homeLeftImage">
                <Fade left>
                  <ProgressiveImage
                    className="progressiveImage progressiveImageMobile"
                    src={image1}
                    placeholder={image1Small}
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
                    placeholder={image2Small}
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
                    placeholder={image3Small}
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
                    placeholder={image4Small}
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

export default ReactDelayRender({ delay: 1500 })(Home);
