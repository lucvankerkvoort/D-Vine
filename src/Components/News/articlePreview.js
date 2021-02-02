import React from "react";
import Carousel from 'react-bootstrap/Carousel';
const ArticlePreview = ({ title, tagline, backgroundPicture, id }) => {
  return (
    <div className="article-preview">
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
              <p>{tagline}</p>
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
              <p>{tagline}</p>
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
              <p>{tagline}</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </div>
      <div className="layer"></div>
    </div>
  );
};

export default ArticlePreview;
