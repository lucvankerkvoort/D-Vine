import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm';
const Jumbotron = ({ deals }) => {
  return (
    <div className="offer">
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
                  <ReactMarkdown plugins={[gfm]}>{data.description}</ReactMarkdown>
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
