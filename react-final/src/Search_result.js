import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./styles.css";
import $ from "jquery";

function SearchResult() {
  const [movies, setMovies] = useState([]);

  async function SearchMovie() {
    const choice = document.getElementById("myChoice").value;
    // const url = `https://api.themoviedb.org/3/movie/${choice}?api_key=153693fafc14ce487b5a217264c74cb1&language=en-US`;
    console.log(choice);
    performSearch(choice);
  }

  function performSearch(choice){
    //console.log("Perform search");
    const urlString = `https://api.themoviedb.org/3/search/movie?query=${choice}&api_key=153693fafc14ce487b5a217264c74cb1&language=en-US`;
    $.ajax({
        url: urlString,
        success: (searchResults) => {
          //console.log("Fetched successfully");
          //const results contain all the movies that we are searching for
          const results = searchResults.results;
          setMovies(searchResults.results);
          console.log(movies[0]);

        },
        error: (xhr, status, err) =>{
          console.error("Failed to fetch data")
        }

    })
  }

  const url = `https://image.tmdb.org/t/p/w500/`;

  return (
   <div className="container">
      <input className="row"
      id = "myChoice"
      type="text"
      placeholder="Search Movie by Title"
      aria-label="Search"
      name="search"
      onChange={SearchMovie}
    />
 
    <div className="row" >
        {/* <h2> Search result for ${document.getElementById("myChoice").value} </h2>  */}
        {movies.slice(0, 12).map(movie => (   
                    <div key={movie.id} className="one_movie col-xl-3 col-lg-4 col-sm-6 col-12">
                      <img className="poster " src={url + movie.poster_path} alt="o" />
                      <h2>{movie.title}</h2>
                      <p>{movie.release_date}</p>
                      <p> {movie.vote_average}</p>
                      <p> {movie.overview.substring(0, 120) + "..."}</p>
                      <a href={`/movie/${movie.id}`}>More Info</a> 
                    </div>
          ))}
          </div>
    </div>
 
  );
}

export default SearchResult;
