import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="logo">Movie App</div>
      <div className="menus">
        <ul className="menu">
          <li>
            <a href="/">Top Rated Movies</a>
          </li>
          <li>
            <a href="/"></a>
          </li>
          <li>
            <a href="/">Search</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
