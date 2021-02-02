import React from "react";
import Carousel from 'react-bootstrap/Carousel';
const Jumbotron = ({ title, backgroundPicture, text }) => {
  return (
    <div className="offer">
      {/* <img src={backgroundPicture} alt="..." />
      <div id="jumbotron-text">
        <h4>{title}</h4>
        <p>{text}</p>
      </div> */}
    <div className="carousel-container" >
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={backgroundPicture}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>{title}</h3>
      <p>{text}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={backgroundPicture}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3>{title}</h3>
      <p>{text}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={backgroundPicture}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3>{title}</h3>
      <p>{text}</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
 
</div>
      <div className="jumbotron-layer"></div>
    </div>
  );
};

export default Jumbotron;
