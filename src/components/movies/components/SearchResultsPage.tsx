import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getSearchResults } from "../../../api";
import MovieCard from "./MovieCard";

function SearchResultsPage() {
  const { query } = useParams<string>();
  const [searchResults, setsearchResults] = useState([]);

  useEffect(() => {
    getSearchResults(query!).then((response) => {
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

export default SearchResultsPage;
