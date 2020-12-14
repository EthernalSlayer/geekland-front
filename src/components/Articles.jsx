import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/articles")
      .then((response) => response.data)
      .then((data) => setArticles(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log(articles);
  }, [articles]);

  return articles.map((article) => <p key={article.id}>{article.title}</p>);
}

export default Articles;
