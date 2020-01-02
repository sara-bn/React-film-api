import React, { useState, useEffect } from "react";
import Axios from "axios";

//Cat:
function IndividualMovie(props) {
  const [item, setItem] = useState({});

  useEffect(() => {
    const id = props.match.params.id;
    console.log(id);
    fetchItem(id);
  }, [props]);

  async function fetchItem(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=153693fafc14ce487b5a217264c74cb1&language=en-US`;
    const response = await Axios.get(url);
    const item = response.data;
    setItem(item);
  }
  const url = `https://image.tmdb.org/t/p/w500/`;

  return (
    <div className="individual-result">
      <div class="row d-flex">
        <div class="col-md ">
          <img src={url + item.poster_path} alt="o" />
          <h1>{item.title}</h1>
          <p>{item.release_date}</p>
          <p> {item.vote_average}</p>
          <p> {item.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default IndividualMovie;
