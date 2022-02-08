import React from "react";
import { connect } from "react-redux";

import MovieCard from "./MovieCard";

import "../styles/movies.css";

function TopRatedMovies({ topRatedMoviesReducer }: any) {
  const topRatedMovies = topRatedMoviesReducer;

  return (
    <>
      <div className="flex-container">
        {topRatedMovies?.map((movie: any) => (
          <MovieCard key={movie.id} movieDetails={movie} />
        ))}
      </div>
    </>
  );
}

const mapStateToProps = (state: any) => {
  return {
    topRatedMoviesReducer: state.topRatedMoviesReducer,
  };
};

export default connect(mapStateToProps)(TopRatedMovies);
