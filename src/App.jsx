import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import MovieDetails from './components/movieDetails/MovieDetail';
import PageNotFound from './components/pageNotFound/PageNotFound';
import Footer from './components/footer/Footer';
import './App.scss';

const App = () => (
  <div className="app">
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetails />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  </div>
);

export default App;
