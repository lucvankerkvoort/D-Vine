import React from "react";
import Carousel from 'react-bootstrap/Carousel';
const ArticlePreview = ({articles}) => {
  return (
    <div className="article-preview">
      <div className="carousel-container" >
        <Carousel>
        {(articles || []).map(({ data, id }) => {
            return (
              <Carousel.Item key={id}>
                <img
                  className="d-block w-100"
                  src={data.imageUrl}
                  alt={data.title}
                />
                <Carousel.Caption>
                  <h3>{data.title}</h3>
                  <p>{data.article}</p>
                </Carousel.Caption>
              </Carousel.Item>

            );
          })} 
        </Carousel>

      </div>
      <div className="layer"></div>
    </div>
  );
};

export default ArticlePreview;
