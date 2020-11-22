import React from "react";

const Jumbotron = ({ title, backgroundPicture, text }) => {
  return (
    <div className="offer">
      <img src={backgroundPicture} alt="..." />
      <div id="jumbotron-text">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
      <div className="jumbotron-layer"></div>
    </div>
  );
};

export default Jumbotron;
