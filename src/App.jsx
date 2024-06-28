import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';
import Header from './components/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=UFC OR Boxing&apiKey=52f15a8ad5174c6f8a19d27cf3a9b33c`
        );
        setNews(response.data.articles);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex(prevIndex => (prevIndex + 1) % news.length);
    }, 5000); // Change news every 5 seconds
    return () => clearInterval(interval);
  }, [news.length]);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center">Error: {error.message}</div>;

  return (
    <div className="container">
      <Header />
      <NewsList news={news} currentNewsIndex={currentNewsIndex} />
    </div>
  );
};

export default App;
