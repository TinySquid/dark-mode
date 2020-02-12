import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Article from './Article';

const Articles = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    console.log('Called news api')
    axios.get('https://newsapi.org/v2/everything?q=bitcoin&from=2020-01-12&sortBy=publishedAt&apiKey=f34a6db149d8414898913c743dab5662')
      .then(response => {
        console.log(response);
        setArticles(response.data.articles);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  return (
    <div className="articles">
      {articles && articles.map((article, idx) => (
        <Article
          key={idx}
          title={article.title}
          image={article.urlToImage}
          site={article.source.name}
          author={article.author}
          pubDate={article.publishedAt}
          description={article.description}
          url={article.url}
        />
      ))}
    </div>
  )
}

export default Articles;
