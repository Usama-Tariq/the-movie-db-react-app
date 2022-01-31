import React, { useState, useEffect } from "react";

import GenreFilteredMovies from "./GenreFilteredMovies";
import { getGenresList } from "../../../api";

import "../styles/movies.css";

function GenreList() {
  const [genreList, setGenreList] = useState<any[]>([]);

  useEffect(() => {
    getGenresList.then((response) => {
      setGenreList(response.data.genres);
    });
  }, [genreList]);

  return (
    <>
      <ul>
        {genreList.map((genre) => (
          <GenreFilteredMovies key={genre.id} genreDetails={genre} />
        ))}
      </ul>
    </>
  );
}

export default GenreList;
