import React, { useState, useEffect } from "react";
import { getGenreDetails } from "../../../api";
import MovieCard from "./MovieCard";
import "../styles/movies.css";

function GenreFilteredMovies(props: any) {
  const { id, name } = props.genreDetails;

  const [MovieDetails, setMovieDetails] = useState<any[]>([]);

  useEffect(() => {
    getGenreDetails(id).then((response) => {
      setMovieDetails(response.data.results);
    });
  }, []);

  return (
    <>
      <h4>{name}</h4>
      <div className="flex-container">
        {MovieDetails.map((movie) => (
          <MovieCard key={movie.id} movieDetails={movie} />
        ))}
      </div>
    </>
  );
}

export default GenreFilteredMovies;
