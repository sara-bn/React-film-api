import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./styles.css";

function SearchResult() {
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

  return (
    <input
      type="search"
      placeholder="Search Movie by Title"
      aria-label="Search"
      name="search"
      onChange={handleChange}
    />
  );
}

export default SearchResult;
