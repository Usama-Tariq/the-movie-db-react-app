import React from "react";
import { connect } from "react-redux";

import GenreFilteredMovies from "./GenreFilteredMovies";

import "../styles/movies.css";

function GenreList({ genreListReducer }: any) {
  const genreList = genreListReducer;

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

const mapStateToProps = (state: any) => {
  return {
    genreListReducer: state.genreListReducer,
  };
};

export default connect(mapStateToProps)(GenreList);
