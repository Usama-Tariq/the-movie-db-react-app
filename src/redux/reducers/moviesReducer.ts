import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialStateType {
  topRatedMovies: [];
  genreList: [];
  genreMovies: [];
  movieDetail: [];
  searchResults: [];
}

const initialState: initialStateType = {
  topRatedMovies: [],
  genreList: [],
  genreMovies: [],
  movieDetail: [],
  searchResults: [],
};

const movies = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setTopRatedMovies(state, { payload }: PayloadAction<any>) {
      state.topRatedMovies = payload;
    },
    setGenreList(state, { payload }: PayloadAction<any>) {
      state.genreList = payload;
    },
    setGenreMovies(state, { payload }: PayloadAction<any>) {
      state.genreMovies = payload;
    },
    setMovieDetail(state, { payload }: PayloadAction<any>) {
      state.movieDetail = payload;
    },
    setSearchResults(state, { payload }: PayloadAction<any>) {
      state.searchResults = payload;
    },
  },
});

export const {
  setTopRatedMovies,
  setGenreList,
  setGenreMovies,
  setMovieDetail,
  setSearchResults,
} = movies.actions;

export default movies.reducer;
