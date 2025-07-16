import React from "react";
import { Link } from "react-router-dom"
import './MovieList.css'
function MovieList({ movies }) {
  return (
    <div className="movie-list-container">
      {movies.map((movie) => (
        <div className="movie-card" key={movie.imdbID}>
          <Link to={`/movie/${movie.imdbID}`}>
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
              alt={movie.Title}
              loading="lazy"
              aria-label={`Poster for ${movie.Title}`}
            />
            <h4>{movie.Title}</h4>
            <p>{movie.Year}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default MovieList;