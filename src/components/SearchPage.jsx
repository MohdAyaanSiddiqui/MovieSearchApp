import React, { useState } from "react";
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import './SearchPage.css'

function SearchPage(){
  const [movies , setMovies] = useState([])

  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
  
  const FetchMovies = async (searchTerm)=>{
    if(!searchTerm.trim()) return;
    try{
  const res = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`)
    const data = await res.json()
    if(data.Response === "True"){
      setMovies(data.Search)
    }else{
      setMovies([]);
    }
    }catch(error){
      console.error('Error Fetching Movies',error)
    }
  }
  return(
    <div className="search-page-container">
      <h1>Movie Search App</h1>
      <SearchBar onSearch={FetchMovies} />
      <MovieList movies = {movies} />
    </div>
  )
}
export default SearchPage