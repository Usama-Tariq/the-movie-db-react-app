import React from "react";
import { useSelector } from "react-redux";

import MovieCard from "./MovieCard";

import "../styles/movies.css";

function TopRatedMovies() {
  const { topRatedMovies } = useSelector(
    (state) =>
      //@ts-ignore
      state.root
  );

  return (
    <>
      <div className="flex-container">
        {topRatedMovies?.map((movie: any) => (
          <MovieCard key={movie.id} movieDetails={movie} />
        ))}
      </div>
    </>
  );
}

export default TopRatedMovies;
