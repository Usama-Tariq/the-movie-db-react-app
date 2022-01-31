import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../../SearchBar";

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
            <Link to="/genre-list">Genre</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          {/* <li>
            <input
              type="text"
              placeholder="Search Movie"
              // value={search}
              // onChange={(e) => setSearch(e.target.value)}
            />
          </li> */}
          <li>
            <SearchBar />
            {/* <div className="search-container">
              <form>
                <label htmlFor="search">Search Movies</label>
                <input
                  type="text"
                  id="search"
                  placeholder="Search Movies"
                  name="search"
                />
                <button type="submit">Search</button>
              </form>
            </div> */}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
