import React from "react";
const ArticlePreview = ({ title, tagline, img, id }) => {
  return (
    <div className="article-preview">
      <img src={img} height="200px" />
      <div className="article-preview-content">
        <h2>{title}</h2>
        <p>{tagline}</p>
      </div>
    </div>
  );
};

export default ArticlePreview;
