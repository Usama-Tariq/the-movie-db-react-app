import React from "react";

import GenreFilteredMovies from "./GenreFilteredMovies";

import "../styles/movies.css";

function GenreList(props: any) {
  const { genreList } = props;

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
