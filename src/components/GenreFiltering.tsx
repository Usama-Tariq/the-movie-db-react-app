import React, { useState, useEffect } from "react";
import { getGenreById } from "../api-tmdb/api";
import MovieCard from "./MovieCard";
import "./Movies.css";

function GenreFiltering(props: any) {
  const { id, name } = props.genreDetails;

  const [genreMoviesById, setGenreMoviesById] = useState<any[]>([]);

  useEffect(() => {
    getGenreById(id).then((response) => {
      setGenreMoviesById(response.data.results);
    });
  }, []);

  return (
    <React.Fragment>
      <h4>{name}</h4>
      <div className="flex-container">
        {genreMoviesById.map((movie) => (
          <MovieCard key={movie.id} movieDetails={movie} />
        ))}
      </div>
    </React.Fragment>
  );
}

export default GenreFiltering;
