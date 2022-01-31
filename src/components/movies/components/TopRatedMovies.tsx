import React, { useState, useEffect } from "react";

import { getMoviesTopRated } from "../../../api";
import MovieCard from "./MovieCard";

import "../styles/movies.css";

function TopRatedMovies() {
  const [topRatedMovies, setTopRatedMovies] = useState<any[]>([]);

  useEffect(() => {
    getMoviesTopRated.then((response) => {
      setTopRatedMovies(response.data.results);
    });
  }, []);

  return (
    <>
      <div className="flex-container">
        {topRatedMovies.map((movie) => (
          <MovieCard key={movie.id} movieDetails={movie} />
        ))}
      </div>
    </>
  );
}

export default TopRatedMovies;