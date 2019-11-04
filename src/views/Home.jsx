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
    <div className="Home view" id="home">
      <CardGroup className="homeImages">
        <Card className="homeImage">
          <Card.Body className="imageContainer">
            <ProgressiveImage
              delay={500}
              src={image1}
              placeholder={image1Smalll}
            >
              {src => <img className="image" src={src} alt="image1" />}
            </ProgressiveImage>
          </Card.Body>
        </Card>
        <Card className="homeImage">
          <Card.Body className="imageContainer">
            <ProgressiveImage
              delay={500}
              src={image2}
              placeholder={image2Smalll}
            >
              {src => <img className="image" src={src} alt="image1" />}
            </ProgressiveImage>
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup className="homeImages">
        <Card className="homeImage">
          <Card.Body className="imageContainer">
            <ProgressiveImage
              delay={500}
              src={image3}
              placeholder={image3Smalll}
            >
              {src => <img className="image" src={src} alt="image1" />}
            </ProgressiveImage>
          </Card.Body>
        </Card>
        <Card className="homeImage">
          <Card.Body className="imageContainer">
            <ProgressiveImage
              delay={500}
              src={image4}
              placeholder={image4Smalll}
            >
              {src => <img className="image" src={src} alt="image1" />}
            </ProgressiveImage>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}
