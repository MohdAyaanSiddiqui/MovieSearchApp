import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './MovieDetails.css'
const MovieDetails = ()=>{
    const {id} = useParams()// from react-router and use Params get route parameters (like the movie ID) , extracts the id parameter from the url
    const [movie,setMovie] = useState(null)
    
  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;// access my Api key from .env file

  useEffect(() => {//called Api , fetch , it runs when the ID changes
    const FetchMovies = async () => {//async function help you for fetching movie details from OMDb using movie ID and Api key
      try {
        const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`);
        const data = await res.json();
        setMovie(data);// update the movie state with the fetched data
      } catch (error) {
        console.error("Error Fetching Movie Details", error);
      }
    };
    FetchMovies(); 
  }, [id]);
  if(!movie) return <p>Loading...</p>// if movie is still null (fetch in progress) , show 'loading
  if(movie.Response === "False") return <p>Movie not found.</p>;
    return(//back button used for back to the homepage
        <div className="movie-details-container">
            <Link to="/" className="back-link">&larr; Back</Link>
            <h1>{movie.Title} ({movie.Year})</h1>
            <img src={movie.Poster} alt={movie.Title} loading="lazy" aria-label={`Poster for ${movie.Title}`} />
            <p><strong>Genre:</strong> {movie.Genre}</p>
            <p><strong>Plot:</strong> {movie.Plot}</p>
            <p><strong>Director:</strong> {movie.Director}</p>
            <p><strong>Actors:</strong> {movie.Actors}</p>
            <p><strong>Runtime:</strong> {movie.Runtime}</p>
            <p><strong>Rating:</strong> {movie.imdbRating}/10</p>
        </div>
    )
}
export default MovieDetails