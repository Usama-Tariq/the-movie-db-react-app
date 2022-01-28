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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/genre-list">Genre</Link>
          </li>
          <li>
            <Link to="/">Search</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
