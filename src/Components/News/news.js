import React from "react";
// import Article from "./article";
// import Images from "../../Images/images";

const News = (props) => {
  console.log(props.children);
  return (
    <div className="news">
      <h1 className="heading">News</h1>
      {props.children}
      <div className="news-layer"></div>
    </div>
  );
};

export default News;
