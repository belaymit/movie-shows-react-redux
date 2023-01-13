import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import movieApis from '../../common/apis/movieApis';
import MovieListing from '../movieListing/MovieListing';
import { ApiKey } from '../../common/apis/MovieApiKeys';
import './home.scss';
import { addMovies } from '../../features/movies/movieSlice';

const Home = () => {
  const dispatch = useDispatch();
  const movieText = 'Harry';
  const fetchMovies = async () => {
    const response = await movieApis.get(
      `?apiKey=${ApiKey}&s=${movieText}&type=movie`,
    )
      .catch((err) => {
        throw (err);
      });
    dispatch(addMovies(response.data));
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <div className="banner-img">
        <MovieListing />
      </div>
    </div>
  );
};

export default Home;
