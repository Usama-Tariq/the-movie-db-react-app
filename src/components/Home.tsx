import React, { useState, useEffect } from "react";
import GenreList from "./movies/components/GenreList";
import { getTopRatedMovies, getGenresList } from "../api/index";
import TopRatedMovies from "./movies/components/TopRatedMovies";
import { updatedMovies } from "./utils/index";

interface movieDetails {
  adult: boolean;
  backdrop_path: string;
  comments: [];
  genre_ids: [];
  id: number;
  isLiked: boolean;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface genreList {
  id: number;
  name: string;
}

function Home() {
  const [topRatedMovies, setTopRatedMovies] = useState<movieDetails[]>([]);
  const [genreList, setGenreList] = useState<genreList[]>([]);

  useEffect(() => {
    getTopRatedMovies.then((response) => {
      setTopRatedMovies(updatedMovies(response.data.results));
    });
  }, []);

  useEffect(() => {
    getGenresList.then((response) => {
      setGenreList(response.data.genres);
    });
  }, []);

  return (
    <>
      <TopRatedMovies topRatedMovies={topRatedMovies} />
      <GenreList genreList={genreList} />
    </>
  );
}

export default Home;
