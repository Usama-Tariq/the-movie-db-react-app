import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import GenreList from "./movies/components/GenreList";
import {
  getTopRatedMovies,
  getGenreList,
} from "../redux/reducers/moviesReducer";
import TopRatedMovies from "./movies/components/TopRatedMovies";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopRatedMovies());
    dispatch(getGenreList());
  }, []);

  return (
    <>
      <TopRatedMovies />
      <GenreList />
    </>
  );
}

export default Home;
