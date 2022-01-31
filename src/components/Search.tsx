import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getSearchMovies } from "../api";
import MovieCard from "./movies/components/MovieCard";
// import List from "./List";

function Search() {
  const { query } = useParams();
  // const [contacts, setContacts] = useState([]);
  // const [search, setSearch] = useState("");
  const [searchResults, setsearchResults] = useState([]);
  // const query: string = "dilwale";
  useEffect(() => {
    //@ts-ignore
    getSearchMovies(query).then((response) => {
      console.log(query, response);
      setsearchResults(response.data.results);
      // console.log(searchResults);
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
