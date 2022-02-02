import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../../movies/components/SearchBar";

import "../styles/navbar.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="logo">Movie App</div>
      <div className="menus">
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <SearchBar />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
