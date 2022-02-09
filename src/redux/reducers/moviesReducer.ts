import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { updateMovie, updateMoviesList } from "../../components/utils";
import {
  topRatedMovies,
  genresList,
  genreDetails,
  movieDetails,
  searchResults,
} from "../../api/index";

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

export const getTopRatedMovies = createAsyncThunk(
  "getTopRatedMovies",
  (params, { dispatch }) => {
    topRatedMovies.then((response: any) => {
      dispatch(setTopRatedMovies(updateMoviesList(response.data.results)));
    });
  }
);

export const getGenreList = createAsyncThunk(
  "getGenresList",
  (params, { dispatch }) => {
    genresList.then((response: any) => {
      dispatch(setGenreList(updateMoviesList(response.data.genres)));
    });
  }
);

export const getGenreMovies = createAsyncThunk(
  "getGenreMovies",
  (params: number, { dispatch }) => {
    genreDetails(params).then((response: any) => {
      dispatch(setGenreMovies(updateMoviesList(response.data.results)));
    });
  }
);

export const getMovieDetail = createAsyncThunk(
  "getMovieDetail",
  (params: number, { dispatch }) => {
    movieDetails(params).then((response: any) => {
      dispatch(setMovieDetail(updateMovie(response.data)));
    });
  }
);

export const getSearchResults = createAsyncThunk(
  "getSearchResults",
  (params: string, { dispatch }) => {
    searchResults(params).then((response: any) => {
      dispatch(setSearchResults(response.data.results));
    });
  }
);

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
