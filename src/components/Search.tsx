import React, { useState, useEffect } from "react";
import { getSearchMovies } from "../api";
import MovieCard from "./movies/components/MovieCard";
// import List from "./List";

function Search() {
  // const [contacts, setContacts] = useState([]);
  // const [search, setSearch] = useState("");
  const [searchResults, setsearchResults] = useState([]);
  const query: string = "drama";

  useEffect(() => {
    getSearchMovies(query).then((res) => {
      setsearchResults(res.data.results);
      // console.log(searchResults);
    });
  });

  //   const filteredContacts =
  //     search.length === 0
  //       ? contacts
  //       : contacts.filter((contact) =>
  //           contact.full_name.toLowerCase().includes(search.toLowerCase())
  //         );

  // return (
  //   <div>
  //     <h3>CONTACTS LIST</h3>
  //     <input
  //       type="text"
  //       placeholder="Search name"
  //       value={search}
  //       onChange={(e) => setSearch(e.target.value)}
  //     />
  //     {/* <List contacts={filteredContacts} /> */}
  //   </div>
  // );
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
