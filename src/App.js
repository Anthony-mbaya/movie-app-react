import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import SearchBar from "./SearchBar";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//a7ddb576

const API_URL = "http://www.omdbapi.com?apikey=a7ddb576";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchedTitle, setSearchedTitle] = useState("");
  //Asynchronous operations allow your code to continue running while waiting for a response from the API, rather than blocking execution until the response is received.
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("Italian");
  }, []);

  return (
    <div className="container-fluid">
      <Header />
      <div className="input-group mb-3">
        <input
          class="form-control"
          type="search"
          aria-label="Search"
          placeholder="Search  for a movie..."
          value={searchedTitle}
          onChange={(e) => {
            setSearchedTitle(e.target.value);
          }}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary">
            <SearchBar
              click={() => {
                searchMovies(searchedTitle);
              }}
            />
          </button>
        </div>
      </div>
      {movies?.length > 0 ? (
        <div className="row">
          {movies.map((movie) => (
            <div className="col-md-3">
              {" "}
              <Movie movie={movie} />
            </div>
          ))}
        </div>
      ) : (
        "Wait the page is loading..."
      )}
    </div>
  );
}

export default App;
