import {
  SET_GENRES_LIST,
  SET_GENRE_MOVIES,
  SET_MOVIE_DETAIL,
  SET_MOVIE_SEARCH_RESULTS,
  SET_TOP_RATED_MOVIES,
} from "../constants";

const initialState: any[] = [];

export const topRatedMoviesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_TOP_RATED_MOVIES:
      return action.payload;

    default:
      return state;
  }
};

export const genreListReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_GENRES_LIST:
      return action.payload;

    default:
      return state;
  }
};

export const genreMoviesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_GENRE_MOVIES:
      return action.payload;

    default:
      return state;
  }
};

export const movieDetailReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_MOVIE_DETAIL:
      return action.payload;

    default:
      return state;
  }
};

export const searchResultsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_MOVIE_SEARCH_RESULTS:
      return action.payload;

    default:
      return state;
  }
};
