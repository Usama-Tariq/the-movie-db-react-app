import React, { useState, useEffect } from "react";
import { getMoviesTopRated, getImage } from "../api-tmdb/api";
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
          <div key={movie.id} className="item">
            <img src={getImage(movie.poster_path)} />
            <p>{movie.original_title}</p>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default Movies;
