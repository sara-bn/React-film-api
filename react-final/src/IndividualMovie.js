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

  function LikeMovie(event){
    event.target.className ="fas fa-heart fa-2x";

  }
  const url = `https://image.tmdb.org/t/p/w500/`;

  return (
    <div className="container">
      <div class="row">
        <div class=" individual-movie col-12">
          <img src={url + item.poster_path} alt="o" />
          <div className="icon"> 
             <i className="far fa-heart fa-2x" onClick={LikeMovie}></i>
             <i className="fal fa-heart-broken"></i>
          </div>
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
