import React from "react";
import MovieRoutes from "./components/MovieRoutes";

import NavBar from "./components/NavBar";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <MovieRoutes />
    </React.Fragment>
  );
}

export default App;
