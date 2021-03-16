import React, { useState, useEffect } from "react";
import News from "../Components/News/news";
import Article from "../Components/News/article";
import { db } from "../Firebase/Firebase";

const NewsPage = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    db.collection('article').onSnapshot(snapshot => {
      setArticles(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })));
    })
  }, [])
  return (<div className="news-page">
    <News>
      {(articles || []).map(({ data, id }) => {
        return (
          <Article
            title={data.title}
            text={data.article}
            img={data.imageUrl}
          />
        );
      })}

      {/* <Article
        title="Article Title"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor in elit ut lobortis. Proin vitae dui eget sem volutpat ornare. Sed ornare hendrerit faucibus. Suspendisse potenti. Nam a varius sem. Morbi maximus sodales leo, sit amet cursus tortor suscipit ut. Donec lacinia vulputate tincidunt. Vivamus vel placerat velit. Nulla sit amet nunc commodo, hendrerit eros non, lacinia sem. Nunc vitae magna eu lacus mollis molestie.

        Nam sit amet sapien ante. Donec ornare lacus in laoreet lacinia. Etiam eu odio ut tortor lobortis vestibulum. Duis varius non sem sit amet consequat. Sed volutpat quam ac lacus ornare convallis id et justo. Nam venenatis enim sed lorem congue facilisis. Pellentesque mattis molestie ipsum, vitae blandit dui tristique et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;"
        img={Images.wine_placeholder}
      /> */}
    </News>
  </div>)
};

export default NewsPage;
