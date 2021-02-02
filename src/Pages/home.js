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

     
        <ArticlePreview
          title="Article Title"
          tagline="Lorem ipsum dolor sit amet"
          backgroundPicture={Images.jumbotronBackground}
          id="1"
        />
     
    </div>
  );
};

export default Home;
