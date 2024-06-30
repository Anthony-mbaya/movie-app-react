import React from "react";
import { FaStar, FaGrinStars } from "react-icons/fa";

export const Movies = ({ movie }) => {
  return (
    <div className="flex flex-col justify-start gap-2 w-fit h-[48em] mx-auto border-b-4 rounded-3xl p-3 border-blue-950">
      <img
        src={
          movie.Poster !== "N/A" ? movie.Poster : "coming-soon-background.jpg"
        }
        alt={movie.Title}
        className="rounded-2xl w-[30em] h-[36em] sm:w-96 sm:h-[36em] object-cover object-center"
      />
      <h2 className="text-[1.4em] font-extrabold text-[rgb(237,26,0)] font-serif max-w-96 break-words">
        {movie.Title}
      </h2>
      <h4 className="text-sm font-bold">Year: {movie.Year}</h4>
      <span className="flex gap-4 items-center justify-start">
        {" "}
        <FaStar size={15} className="w-fit text-blue-700" />{" "}
        <span className="w-fit">[ 5 ]</span>{" "}
      </span>
      <button className="w-fit flex items-center justify-center mx-auto gap-1 bg-gray-700 px-3 py-2 text-white font-bold rounded-2xl hover:bg-slate-500">
        Add to Fav{" "}
        <FaGrinStars
          size={14}
          className="m-auto text-green-500 hover:text-white"
        />{" "}
      </button>
    </div>
  );
};
