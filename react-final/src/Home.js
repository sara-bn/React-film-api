import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Select from "react-select";
import Axios from "axios";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Moment from "moment";

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    handleChange();
  }, [items]);

  async function handleChange(selected) {
    const choice = document.getElementById("mySelect").value;
    const url = `https://api.themoviedb.org/3/movie/${choice}?api_key=153693fafc14ce487b5a217264c74cb1&language=en-US`;
    const response = await Axios.get(url);
    const items = response.data;
    setItems(items.results);
  }

  const url = `https://image.tmdb.org/t/p/w500/`;

  return (
    <div className="home-result">
      <select id="mySelect" onChange={handleChange}>
        <option value="popular">Popular</option>
        <option value="top_rated">Top Rated</option>
        <option value="upcoming">Upcoming</option>
        <option value="now_playing">Now Playing</option>
      </select>

      <div className="main-container black">
        <div className="container">
          <div className="d-lg-flex flex-wrap justify-content-end">
            {items.slice(0, 12).map(item => (
              <div className="col ml-auto" key={item.id}>
                <div className="card mb-4">
                  <img
                    className="poster "
                    src={url + item.poster_path}
                    alt="movie-poster"
                  />
                  <div className="card-body">
                    <div className="date">
                      <span>
                        {Moment(item.release_date).format("MMM d YYYY")}
                      </span>
                    </div>
                    <span>{item.vote_average}</span>
                  </div>
                  <div className="card-text">
                    <div className="content">
                      <p className="text">
                        {item.overview != undefined &&
                          item.overview.substring(0, 120) + "..."}
                      </p>
                      <a href={`/movie/${item.id}`}>More Info</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
