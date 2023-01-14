import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './movies/movieSlice';

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
