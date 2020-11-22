import React from "react";
import Jumbotron from "../Components/Jumbotron/jumbotron";
import ArticlePreview from "../Components/News/articlePreview";
import News from "../Components/News/news";
import Images from "../Images/images";

const Home = ({ collections }) => {
  return (
    <div className="home">
      <h6>Good D-Vine</h6>
      <Jumbotron
        title="This months offers"
        text="Get 5 bottles + 1 free"
        backgroundPicture={Images.jumbotronBackground}
      />
      <News>
        <ArticlePreview
          title="Article Title"
          tagline="Lorem ipsum dolor sit amet"
          img={Images.wine_placeholder}
          id="1"
        />
      </News>
    </div>
  );
};

export default Home;
