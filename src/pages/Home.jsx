import React, { useState, useEffect } from 'react';
import { getPhotos } from './../api/getPhotosApi';
import Header from '../components/Header';
import ImageList from '../components/ImageList';
import SearchBar from './../components/SearchBar';

const Home = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState();

  useEffect(() => {
    window.addEventListener('scroll', handleInfiniteScroll);
    return () => {
      window.removeEventListener('scroll', handleInfiniteScroll);
    };
  }, [page]);

  useEffect(() => {
    if (page > 1) {
      handleSearch(query);
    }
  }, [page]);

  const handleInfiniteScroll = () => {
    const scrollTop = Math.max(
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    const scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight - 5) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleSearch = (query) => {
    getPhotos(query, page, 30)
      .then(response => response.json())
      .then(data => setImages((images) => [...images, ...data.photos.photo]))
      .catch(error => console.log(error));
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} onQuery={setQuery} />
      <ImageList images={images} />
    </div>
  );
};

export default Home;
