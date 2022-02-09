import { combineReducers } from "redux";

import movieReducer from "./moviesReducer";

const rootReducer = combineReducers({
  movieReducer,
});

export default rootReducer;
