import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getSearchResults } from "../api";
import MovieCard from "./movies/components/MovieCard";

function Search() {
  const { query } = useParams();
  const [searchResults, setsearchResults] = useState([]);

  useEffect(() => {
    //@ts-ignore
    getSearchResults(query).then((response) => {
      console.log(query, response);
      setsearchResults(response.data.results);
    });
  }, [query]);

  return (
    <>
      <div className="flex-container">
        {searchResults.map((movie, index) => (
          <MovieCard key={index} movieDetails={movie} />
        ))}
      </div>
    </>
  );
}

export default Search;
