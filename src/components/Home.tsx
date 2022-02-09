import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import GenreList from "./movies/components/GenreList";
import { getTopRatedMovies, getGenresList } from "../api/index";
import {
  setTopRatedMovies,
  setGenreList,
} from "../redux/reducers/moviesReducer";
import TopRatedMovies from "./movies/components/TopRatedMovies";
import { updateMoviesList } from "./utils/index";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    getTopRatedMovies.then((response: any) => {
      dispatch(setTopRatedMovies(updateMoviesList(response.data.results)));
    });
    getGenresList.then((response: any) => {
      dispatch(setGenreList(response.data.genres));
    });
  }, []);

  return (
    <>
      <TopRatedMovies />
      <GenreList />
    </>
  );
}

export default Home;
