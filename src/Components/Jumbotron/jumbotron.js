import React from "react";
import Carousel from 'react-bootstrap/Carousel';
const Jumbotron = ({ deals }) => {
  return (
    <div className="offer">
      {/* <img src={backgroundPicture} alt="..." />
      <div id="jumbotron-text">
        <h4>{title}</h4>
        <p>{text}</p>
      </div> */}
      <div className="carousel-container" >
        <Carousel>
          {(deals || []).map(({ data, id }) => {
            return (
              <Carousel.Item key={id}>
                <img
                  className="d-block w-100"
                  src={data.imageUrl}
                  alt={data.title}
                />
                <Carousel.Caption>
                  <h3>{data.title}</h3>
                  <p>{data.description}</p>
                </Carousel.Caption>
              </Carousel.Item>

            );
          })}  </Carousel>

      </div>
      <div className="jumbotron-layer"></div>
    </div>
  );
};

export default Jumbotron;
