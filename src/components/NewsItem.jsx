import React from 'react';


const NewsItem = ({ article, isMain }) => {
  return (
    <div className={`card mb-4 ${isMain ? 'main-news' : ''}`}>
      {article.urlToImage && <img src={article.urlToImage} alt={article.title} className="card-img-top" />}
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text">{article.description}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
