import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect, useDispatch } from "react-redux";

import { getSearchResults } from "../../../api";
import MovieCard from "./MovieCard";
import { setSearchResultsAction } from "../../../redux/actions";

function SearchResultsPage({ searchResultsReducer }: any) {
  const dispatch = useDispatch();
  const searchResults = searchResultsReducer;

  const { query } = useParams<string>();

  useEffect(() => {
    getSearchResults(query!).then((response) => {
      dispatch(setSearchResultsAction(response.data.results));
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

const mapStateToProps = (state: any) => {
  return {
    searchResultsReducer: state.searchResultsReducer,
  };
};

export default connect(mapStateToProps)(SearchResultsPage);
