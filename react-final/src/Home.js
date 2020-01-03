import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Select from "react-select";
import Axios from "axios";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
        <div className="container" >
          <div className="row" >
              {items.slice(0, 12).map(item => (
                  <div key={item.id} className="one_movie col-xl-3 col-lg-4 col-sm-6 col-12">
                    <img className="poster " src={url + item.poster_path} alt="o" />
                    <h2>{item.title}</h2>
                    <p>{item.release_date}</p>
                    <p> {item.vote_average}</p>
                    <p> {item.overview.substring(0, 120) + "..."}</p>
                    <a href={`/movie/${item.id}`}>More Info</a>
                  </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
