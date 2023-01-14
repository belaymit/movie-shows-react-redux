import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MovieListing from '../movieListing/MovieListing';
import { fetchAsyncMovies } from '../../features/movies/movieSlice';
import './home.scss';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies());
  }, [dispatch]);

  return (
    <div>
      <div className="banner-img">
        <MovieListing />
      </div>
    </div>
  );
};

export default Home;
