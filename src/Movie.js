import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function Movie({ movie }) {
  return (
    <div className="card">
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/400"
        }
        class="card-img-top"
        alt="Movie Poster"
      />
      <div class="card-body">
        <h4 class="card-title">{movie.Title}</h4>
        <h5 class="card-text">{movie.Type}</h5>
        <p class="card-text">Year: {movie.Year}</p>
        <button type="button" class="btn btn-outline-secondary">
          Add to Watchlist
        </button>
      </div>
    </div>
  );
}
