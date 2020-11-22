import React from "react";
import Jumbotron from "../Components/Jumbotron/jumbotron";
import News from "../Components/News/news";
import images from "../Images/images";

const Home = ({ collections }) => {
  return (
    <div className="home">
      <h6>Good D-Vine</h6>
      <Jumbotron
        title="This months offers"
        text="Get 5 bottles + 1 free"
        backgroundPicture={images.jumbotronBackground}
      />
      <News />
    </div>
  );
};

export default Home;
