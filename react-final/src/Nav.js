import React from "react";
import { Link } from "react-router-dom";
// import { slide as Menu } from "react-burger-menu";

function Nav(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" >Movie DB</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarToggleExternalContent">
                  {/* <Menu {...props}> */}
                  <ul className="navbar-nav">
                    
                    <Link to="/">
                      <li className="nav-item nav-link">Home</li>
                    </Link>
                    <Link to="/about">
                      <li className="nav-item nav-link">About</li>
                    </Link>
                    <Link to="/discover">
                      <li className="nav-item nav-link">Discover</li>
                    </Link>
                    <Link to="/search_result">
                      <li className="nav-item nav-link">Search Result</li>
                    </Link>
                    <Link to="/individual_movie">
                      <li className="nav-item nav-link">Individual Movie</li>
                    </Link>
                    <Link to="/my_favorites">
                      <li className="nav-item nav-link">My Favorites</li>
                    </Link>
                    <Link to="/my_rated">
                      <li className="nav-item nav-link">My Rated</li>
                    </Link>
                  </ul>
          </div>
        </div>
</nav>  );
             
}

export default Nav;
