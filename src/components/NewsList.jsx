import React from 'react';
import NewsItem from './NewsItem';


const NewsList = ({ news, currentNewsIndex }) => {
  const mainNews = news[currentNewsIndex];
  const recommendedNews = news.filter((_, index) => index !== currentNewsIndex);

  return (
    <div className="row mt-4">
      <div className="col-md-8">
        {mainNews && <NewsItem article={mainNews} isMain />}
      </div>
      <div className="col-md-4">
        {recommendedNews.map((article, index) => (
          <NewsItem key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default NewsList;
