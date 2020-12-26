import React from "react";
const Article = ({ title, text, img }) => {
  return (
    <div className="article">
      <h2>{title}</h2>
      <div className="article-content">
        <img src={img} height="200px" alt="..." />
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Article;
