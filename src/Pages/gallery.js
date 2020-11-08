import React from "react";
import { Carousel } from "react-bootstrap";

const Gallery = ({ picture }) => {
  return (
    <div className="gallery">
      <Carousel>
        {picture.map((pics, i) => {
          return (
            <Carousel.Item>
              <div
                key={i}
                className="picture"
                style={{
                  background: `url(${pics})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Gallery;
