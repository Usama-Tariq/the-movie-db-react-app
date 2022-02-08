import React, { useState, useEffect } from "react";
import GenreList from "./movies/components/GenreList";
import { getTopRatedMovies, getGenresList } from "../api/index";
import TopRatedMovies from "./movies/components/TopRatedMovies";
import { updateMoviesList } from "./utils/index";
import { useDispatch } from "react-redux";
import { setTopRatedMoviesAction, setGenreListAction } from "../redux/actions";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    getTopRatedMovies.then((response) => {
      dispatch(
        setTopRatedMoviesAction(updateMoviesList(response.data.results))
      );
    });
  }, []);

  useEffect(() => {
    getGenresList.then((response) => {
      dispatch(setGenreListAction(response.data.genres));
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
