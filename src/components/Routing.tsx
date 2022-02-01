import React from "react";
import { Routes, Route } from "react-router-dom";

import GenreList from "./movies/components/GenreList";
import Home from "./Home";
import MovieDetail from "./movies/components/MovieDetail";
import NotFound from "./NotFound";
import Search from "./Search";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="genre-list" element={<GenreList />} />
        <Route path="movie-detail/:movieId" element={<MovieDetail />} />
        <Route path="search/:query" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Routing;
