import {
  SET_GENRES_LIST,
  SET_GENRE_MOVIES,
  SET_MOVIE_DETAIL,
  SET_MOVIE_SEARCH_RESULTS,
  SET_TOP_RATED_MOVIES,
} from "../constants";

export const setTopRatedMoviesAction = (movies: any[]) => {
  return {
    type: SET_TOP_RATED_MOVIES,
    payload: movies,
  };
};

export const setGenreListAction = (genres: any[]) => {
  return {
    type: SET_GENRES_LIST,
    payload: genres,
  };
};

export const setGenreMoviesAction = (movies: any[]) => {
  return {
    type: SET_GENRE_MOVIES,
    payload: movies,
  };
};

export const setMovieDetailAction = (movie: any) => {
  return {
    type: SET_MOVIE_DETAIL,
    payload: movie,
  };
};

export const setSearchResultsAction = (movie: any) => {
  return {
    type: SET_MOVIE_SEARCH_RESULTS,
    payload: movie,
  };
};
