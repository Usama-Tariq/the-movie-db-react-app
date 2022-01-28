import React from "react";

import MovieDetail from "./components/MovieDetail";
import MovieCard from "./components/MovieCard";
import Movies from "./components/Movies";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Movies />
    </div>
  );
}

export default App;
