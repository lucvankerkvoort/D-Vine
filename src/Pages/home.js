import React, { useState,useEffect } from "react";
import Jumbotron from "../Components/Jumbotron/jumbotron";
import ArticlePreview from "../Components/News/articlePreview";
import Images from "../Images/images";
import { db } from "../Firebase/Firebase";


const Home = ({ collections }) => {
  const [articles,setArticles]=useState([]);
  const [deals,setDeals]=useState([]);

  useEffect(()=>{
    db.collection('article').onSnapshot(snapshot=>{
        setArticles(snapshot.docs.map(doc=>({
            id:doc.id,
            data:doc.data()})));
    })
  },[])
  useEffect(()=>{
    db.collection('deals').onSnapshot(snapshot=>{
      setDeals(snapshot.docs.map(doc=>({
            id:doc.id,
            data:doc.data()})));
    })
  },[])

  return (
    <div className="home">
      <h6>Good D-Vine</h6>
      <Jumbotron
        deals={deals}
      />

     
        <ArticlePreview
         articles={articles}
        />
     
    </div>
  );
};

export default Home;
