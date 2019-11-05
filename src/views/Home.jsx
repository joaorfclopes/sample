import React from "react";
import { CardGroup, Card } from "react-bootstrap";
import ProgressiveImage from "react-progressive-image";
import image1Smalll from "../assets/images/image1Small.jpg";
import image1 from "../assets/images/image1.jpg";
import image2Smalll from "../assets/images/image2Small.jpg";
import image2 from "../assets/images/image2.jpg";
import image3Smalll from "../assets/images/image3Small.jpg";
import image3 from "../assets/images/image3.jpg";
import image4Smalll from "../assets/images/image4Small.jpg";
import image4 from "../assets/images/image4.jpg";

export default function Home() {
  return (
    <div className="home view">
      <CardGroup className="homeImages">
        <Card className="homeImage">
          <Card.Body className="imageCard">
            <ProgressiveImage
              className="progressiveImage"
              src={image1}
              placeholder={image1Smalll}
              delay={1000}
            >
              {src => (
                <div className="imageContainer">
                  <div className="imageText">
                    <h5>Lorem ipsum</h5>
                    <p>Dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                  <img className="image" src={src} alt="image1" />
                </div>
              )}
            </ProgressiveImage>
          </Card.Body>
        </Card>
        <Card className="homeImage">
          <Card.Body className="imageCard">
            <ProgressiveImage
              src={image2}
              placeholder={image2Smalll}
              delay={1000}
            >
              {src => (
                <div className="imageContainer">
                  <div className="imageText">
                    <h5>Lorem ipsum</h5>
                    <p>Dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                  <img className="image" src={src} alt="image2" />
                </div>
              )}
            </ProgressiveImage>
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup className="homeImages">
        <Card className="homeImage">
          <Card.Body className="imageCard">
            <ProgressiveImage
              src={image3}
              placeholder={image3Smalll}
              delay={1000}
            >
              {src => (
                <div className="imageContainer">
                  <div className="imageText">
                    <h5>Lorem ipsum</h5>
                    <p>Dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                  <img className="image" src={src} alt="image3" />
                </div>
              )}
            </ProgressiveImage>
          </Card.Body>
        </Card>
        <Card className="homeImage">
          <Card.Body className="imageCard">
            <ProgressiveImage
              src={image4}
              placeholder={image4Smalll}
              delay={1000}
            >
              {src => (
                <div className="imageContainer">
                  <div className="imageText">
                    <h5>Lorem ipsum</h5>
                    <p>Dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                  <img className="image" src={src} alt="image4" />
                </div>
              )}
            </ProgressiveImage>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}
