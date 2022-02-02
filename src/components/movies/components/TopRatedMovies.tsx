import React from "react";

import MovieCard from "./MovieCard";

import "../styles/movies.css";

function TopRatedMovies(props: any) {
  const { topRatedMovies } = props;

  return (
    <>
      <div className="flex-container">
        {topRatedMovies.map((movie: any) => (
          <MovieCard key={movie.id} movieDetails={movie} />
        ))}
      </div>
    </>
  );
}

export default TopRatedMovies;
