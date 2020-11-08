import React from "react";

const Jumbotron = ({ title, backgroundPicture, text }) => {
  return (
    <div
      className="jumbotron"
      style={
        backgroundPicture
          ? {
              background: `url(${backgroundPicture})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : null
      }
    >
      <div className="jumbotron-content">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      <div className="jumbotron-layer"></div>
    </div>
  );
};

export default Jumbotron;
