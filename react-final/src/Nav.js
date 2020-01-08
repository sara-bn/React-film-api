import React from "react";
import { Link } from "react-router-dom";
// import { slide as Menu } from "react-bur
import "bootstrap/dist/css/bootstrap.min.css";

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
              <a className="navbar-brand" href="./" ><img className="logo" src="https://www.themoviedb.org/assets/2/v4/logos/312x276-primary-green-74212f6247252a023be0f02a5a45794925c3689117da9d20ffe47742a665c518.png"/></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>

              <div className=" menu collapse navbar-collapse " id="navbarNav">
                  {/* <Menu {...props}> */}
                  <ul className="navbar-nav">
                    
                    <Link to="/about">
                      <li className="nav-item nav-link">About</li>
                    </Link>
                    <Link to="/discover">
                      <li className="nav-item nav-link">Discover</li>
                    </Link>
                    <Link to="/search_result">
                      <li className="nav-item nav-link">Search Result</li>
                    </Link>
                    <Link to="/my_favorites">
                      <li className="nav-item nav-link">Favorites</li>
                    </Link>
                    <Link to="/my_rated">
                      <li className="nav-item nav-link">Rated</li>
                    </Link>
                  </ul>

          </div>
        </div>
    </nav>);
             
}

export default Nav;
