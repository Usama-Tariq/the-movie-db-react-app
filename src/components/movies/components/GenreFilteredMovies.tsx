import React, { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";

import MovieCard from "./MovieCard";
import { getGenreMovies } from "../../../redux/reducers/moviesReducer";

import "../styles/movies.css";

function GenreFilteredMovies(props: any) {
  const dispatch = useDispatch();

  const { id, name } = props.genreDetails;
  const { genreMovies } = useSelector(
    (state) =>
      //@ts-ignore
      state.root
  );

  useEffect(() => {
    dispatch(getGenreMovies(id));
  }, [id]);

  return (
    <>
      <h4>{name}</h4>
      <div className="flex-container">
        {genreMovies.map((movie: any) => (
          <MovieCard key={movie.id} movieDetails={movie} />
        ))}
      </div>
    </>
  );
}

export default GenreFilteredMovies;
