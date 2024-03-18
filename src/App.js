// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import AboutView from './Components/AboutView'
import Home from './Components/Home';
import SearchView from './Components/SearchView';
import MovieView from './Components/MovieView';
import { Routes, Route } from 'react-router-dom';
import React from 'react';

// TMDB API Key = 9e5e7271e4c3358295bdfdf15427362a

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    if (searchText) {
      console.log(searchText, "is the search text.....")
      fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText}&api_key=9e5e7271e4c3358295bdfdf15427362a`)
        .then(response => response.json())
        .then(data => {
          // console.log(data)
          setSearchResults(data.results)
        })
    }
  }, [searchText])

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/search" element={<SearchView keyword={searchText} searchResults={searchResults} />} />
        <Route path="/movies/:id" element={<MovieView />} />
      </Routes>
    </div>
  );
}

export default App;
