import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../../movies/components/SearchBar";
import { useNavigate } from "react-router-dom";
import { onLogInLogOut, isLoggedIn } from "../../utils";

import "../styles/navbar.css";
import "../../movies/styles/movies.css";

function NavBar() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("../login");
  };
  const handleSignup = () => {
    navigate("../signup");
  };
  const handleLogout = () => {
    onLogInLogOut();
    navigate("../login");
  };

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
          {isLoggedIn() ? (
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          ) : (
            <>
              <li>
                <button onClick={handleLogin}>Login</button>
              </li>
              <li>
                <button onClick={handleSignup}>Signup</button>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
