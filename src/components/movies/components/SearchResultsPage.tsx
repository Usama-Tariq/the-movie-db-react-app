import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getSearchResults } from "../../../api";
import MovieCard from "./MovieCard";
import { setSearchResults } from "../../../redux/reducers/moviesReducer";

function SearchResultsPage() {
  const dispatch = useDispatch();
  const { searchResults } = useSelector(
    (state) =>
      //@ts-ignore
      state.root
  );

  const { query } = useParams<string>();

  useEffect(() => {
    getSearchResults(query!).then((response: any) => {
      dispatch(setSearchResults(response.data.results));
    });
  }, [query]);

  return (
    <>
      <div className="flex-container">
        {searchResults.map((movie: any, index: number) => (
          <MovieCard key={index} movieDetails={movie} />
        ))}
      </div>
    </>
  );
}

export default SearchResultsPage;
