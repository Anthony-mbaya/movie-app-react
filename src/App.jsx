import React, { useEffect, useState } from "react";
import { FaSearch, FaHandPointUp, FaHeart } from "react-icons/fa";
import { Movies } from "./Movies";

const MOVIE_URL = "https://www.omdbapi.com?apikey=a7ddb576";

export const App = () => {
  const [searched, setSearched] = useState("");
  const [movies, setMovies] = useState([]);

  const movie_search = async (movie_title) => {
    const res = await fetch(`${MOVIE_URL}&s=${movie_title}`);
    const data = await res.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    movie_search("Italian");
  }, []);

  return (
    <div className="w-fit bg-green-300 mx-auto">
      <span className="fixed top-4 sm:top-8 right-4 sm:right-14 cursor-pointer p-2 rounded-2xl bg-[rgb(237,26,0)] hover:bg-blue-950">
        <a href="#top">
          <FaHandPointUp title="Go Up" size={14} className="text-white" />
        </a>
      </span>
      <span className="fixed top-4 sm:top-8 sm:right-24 right-14 cursor-pointer p-2 rounded-2xl bg-[rgb(237,26,0)] hover:bg-blue-950">
        <a href="#top">
          <FaHeart title="Favourites" size={14} className="text-white" />
        </a>
      </span>
      <div className="w-fit py-16 mx-auto" id="top">
        <h1 className="w-fit mx-auto sm:mx-0 text-center text-[2.5em] font-extrabold text-blue-950">
          Crux~MovieBaz@
        </h1>

        <div className="w-fit sm:w-full mx-auto flex justify-between my-4 rounded-3xl shadow-2xl shadow-black bg-white">
          <input
            type="text"
            className="w-fit sm:w-full text-[1.2em] px-3 sm:px-6 py-2 sm:py-3 outline-green-400 outline-1 rounded-l-3xl text-black font-bold bg-transparent focus:bg-slate-200"
            placeholder="Enter movie title"
            value={searched}
            onChange={(e) => setSearched(e.target.value)}
          />
          <span className="w-fit bg-slate-500 rounded-r-2xl hover:bg-green-500 px-4 flex justify-center items-center shadow-2xl shadow-black">
            <FaSearch
              onClick={() => movie_search(searched)}
              size={18}
              className="text-blue-950"
            />{" "}
          </span>
        </div>

        {movies?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-auto ">
            {movies.map((movie, index) => (
              <div key={index} className="mx-auto w-fit">
                {" "}
                <Movies movie={movie} />{" "}
              </div>
            ))}
          </div>
        ) : (
          <div>
            {" "}
            <hr className="sm:w-[45em] md:w-[50em] lg:w-[95em]" />
            <strong className="w-full">
              Loading ...{" "}
              <span className="text-red-600">If persists try again!</span>
            </strong>{" "}
          </div>
        )}
      </div>
    </div>
  );
};
