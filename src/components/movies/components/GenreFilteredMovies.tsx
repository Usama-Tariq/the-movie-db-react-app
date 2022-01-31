import React, { useState, useEffect } from "react";
import { getGenreById } from "../../../api";
import MovieCard from "./MovieCard";
import "../styles/movies.css";

function GenreFilteredMovies(props: any) {
  const { id, name } = props.genreDetails;

  const [MoviesDetails, setMoviesDetails] = useState<any[]>([]);

  useEffect(() => {
    getGenreById(id).then((response) => {
      setMoviesDetails(response.data.results);
    });
  }, []);

  return (
    <>
      <h4>{name}</h4>
      <div className="flex-container">
        {MoviesDetails.map((movie) => (
          <MovieCard key={movie.id} movieDetails={movie} />
        ))}
      </div>
    </>
  );
}

export default GenreFilteredMovies;
