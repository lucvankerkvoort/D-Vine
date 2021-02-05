import React from "react";
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm';
const Article = ({ title, text, img }) => {
  return (
    <div className="article">
      <h2>{title}</h2>
      <div className="article-content">
        <img src={img} height="200px" alt="..." />
        <div style={{color:"black"}}>
          <p>Hello</p>
        <ReactMarkdown plugins={[gfm]}>{text}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default Article;
