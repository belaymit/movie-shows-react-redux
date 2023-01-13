import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../features/movies/movieSlice';
import MovieCard from '../movieCard/MovieCard';
import './movieListing.scss';

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  let renderMovies = '';
  renderMovies = movies.Response === 'True' ? (movies.Search.map((movie, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <MovieCard key={index} data={movie} />)))
    : (
      <div className="movies-error">
        <h3>
          {movies.error}
        </h3>
      </div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          {renderMovies}
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
