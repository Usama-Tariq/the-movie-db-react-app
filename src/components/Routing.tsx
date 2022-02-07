import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import LoginForm from "./LoginForm";
import MovieDetail from "./movies/components/MovieDetail";
import NotFound from "./NotFound";
import SearchResultsPage from "./movies/components/SearchResultsPage";
import SignupForm from "./SignupForm";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="signup" element={<SignupForm />} />
        <Route path="movie-detail/:movieId" element={<MovieDetail />} />
        <Route path="search/:query" element={<SearchResultsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Routing;
