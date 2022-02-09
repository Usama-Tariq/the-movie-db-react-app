import { createAction } from "@reduxjs/toolkit";

import {
  SET_GENRES_LIST,
  SET_GENRE_MOVIES,
  SET_MOVIE_DETAIL,
  SET_MOVIE_SEARCH_RESULTS,
  SET_TOP_RATED_MOVIES,
} from "../constants";

export const setTopRatedMovies = createAction(
  SET_TOP_RATED_MOVIES,
  (movies: any) => {
    return {
      payload: movies,
    };
  }
);

export const setGenreList = createAction(SET_GENRES_LIST, (genres: any) => {
  return {
    payload: genres,
  };
});

export const setGenreMovies = createAction(
  SET_GENRE_MOVIES,
  (genreMovies: any) => {
    return {
      payload: genreMovies,
    };
  }
);

export const setMovieDetail = createAction(SET_MOVIE_DETAIL, (movie: any) => {
  return {
    payload: movie,
  };
});

export const setSearchResults = createAction(
  SET_MOVIE_SEARCH_RESULTS,
  (movies: any) => {
    return {
      payload: movies,
    };
  }
);
