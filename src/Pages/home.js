import React from "react";
import Jumbotron from "../Components/Jumbotron/jumbotron";
import News from "../Components/News/news";
import images from "../Images/images";

const Home = ({ collections }) => {
  return (
    <div className="home">
      <Jumbotron
        title="Good D-Vine"
        text="test."
        backgroundPicture={images.jumbotronBackground}
      />
      <News />
    </div>
  );
};

export default Home;
