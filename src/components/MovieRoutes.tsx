import React from "react";
import { Routes, Route } from "react-router-dom";

import Genre from "./Genre";
import Home from "./Home";
import MovieDetail from "./MovieDetail";
import NoMatch from "./NoMatch";

function MovieRoutes(props: any) {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie-detail/:movieId" element={<MovieDetail />} />
        <Route path="genre-list" element={<Genre />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </React.Fragment>
  );
}

export default MovieRoutes;
