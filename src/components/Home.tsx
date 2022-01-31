import React from "react";
import GenreList from "./movies/components/GenreList";
import TopRatedMovies from "./movies/components/TopRatedMovies";

function Home() {
  return (
    <>
      <TopRatedMovies />
      <GenreList />
    </>
  );
}

export default Home;
