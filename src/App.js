import './App.css';
import { useState, useEffect } from 'react';
import NavbarNew from './Components/NavbarNew';
import AboutView from './Components/AboutView'
import Home from './Components/Home';
import SearchView from './Components/SearchView';
import MovieView from './Components/MovieView';
import { Routes, Route } from 'react-router-dom';
import React from 'react';


function App() {
  const [searchResults, setSearchResults] = useState(null); // Initialize with null instead of an empty array
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (searchText) {
      console.log(searchText, "is the search text.....")
      fetch(`http://www.omdbapi.com/?s=${searchText}&apikey=b09cfc46`) // Use searchText instead of searchResults
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setSearchResults(data.Search); // Update state with data.Search, assuming Search is the array of movies
        })
        .catch(error => {
          console.error('Error fetching search results:', error);
        });
    }
  }, [searchText]);

  return (
    <div>
      <NavbarNew searchText={searchText} setSearchText={setSearchText} />
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
