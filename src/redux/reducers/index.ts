import { combineReducers } from "redux";

import {
  topRatedMoviesReducer,
  genreListReducer,
  genreMoviesReducer,
  movieDetailReducer,
  searchResultsReducer,
} from "./moviesReducer";

const rootReducer = combineReducers({
  topRatedMoviesReducer,
  genreListReducer,
  genreMoviesReducer,
  movieDetailReducer,
  searchResultsReducer,
});

export default rootReducer;
