import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

function Nav(props) {
  return (
    <div className="nav-result">
      <nav>
        <Menu {...props}>
          <ul>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/discover">
              <li>Discover</li>
            </Link>
            <Link to="/search_result">
              <li>Search Result</li>
            </Link>
            <Link to="/individual_movie">
              <li>Individual Movie</li>
            </Link>
            <Link to="/my_favorites">
              <li>My Favorites</li>
            </Link>
            <Link to="/my_rated">
              <li>My Rated</li>
            </Link>
          </ul>
        </Menu>
      </nav>
    </div>
  );
}

export default Nav;
