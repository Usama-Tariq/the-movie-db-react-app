import React from "react";
import { useSelector } from "react-redux";

import GenreFilteredMovies from "./GenreFilteredMovies";

import "../styles/movies.css";

function GenreList() {
  const { genreList } = useSelector(
    (state) =>
      //@ts-ignore
      state.root
  );

  return (
    <>
      <div>
        {genreList.map((genre: any) => (
          <GenreFilteredMovies key={genre.id} genreDetails={genre} />
        ))}
      </div>
    </>
  );
}

export default GenreList;
