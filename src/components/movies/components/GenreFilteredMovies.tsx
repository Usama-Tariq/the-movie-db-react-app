import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";

import { getGenreDetails } from "../../../api/index";
import MovieCard from "./MovieCard";
import { updateMoviesList } from "../../utils/index";
import { setGenreMoviesAction } from "../../../redux/actions";

import "../styles/movies.css";

function GenreFilteredMovies(props: any) {
  const dispatch = useDispatch();

  const { id, name } = props.genreDetails;
  const genreMovies = props.genreMoviesReducer;

  useEffect(() => {
    getGenreDetails(id).then((response) => {
      dispatch(setGenreMoviesAction(updateMoviesList(response.data.results)));
    });
  }, []);

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

const mapStateToProps = (state: any) => {
  return {
    genreMoviesReducer: state.genreMoviesReducer,
  };
};

export default connect(mapStateToProps)(GenreFilteredMovies);
