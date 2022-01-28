import React, { useState, useEffect } from "react";
import { getMoviesTopRated } from "../api-tmdb/api";
import MovieCard from "./MovieCard";
import "./Movies.css";

function Movies() {
  const [topRatedMovies, setTopRatedMovies] = useState<any[]>([]);

  useEffect(() => {
    getMoviesTopRated.then((response) => {
      setTopRatedMovies(response.data.results);
    });
  }, []);

  return (
    <React.Fragment>
      <div className="flex-container">
        {topRatedMovies.map((movie) => (
          <MovieCard key={movie.id} movieDetails={movie} />
        ))}
      </div>
    </React.Fragment>
  );
}

export default Movies;
