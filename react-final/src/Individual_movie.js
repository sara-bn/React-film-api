import React, { useState, useEffect } from "react";
import Axios from "axios";
import Home from "./Home"
export default class Individual_movie extends React.Component{
    
    constructor(props){
        super(props);
        this.state = { 
          item : ' ',
          url : `https://image.tmdb.org/t/p/w500/`};
      const id = props.match.params.id;
    
     this.componentDidMount(id);
    }

    async componentDidMount(id) {
      console.log(id);
      const url = `https://api.themoviedb.org/3/movie/${id}?api_key=153693fafc14ce487b5a217264c74cb1&language=en-US`;
      const response = await Axios.get(url);
      const item = response.data;
      this.setItem(item)
    }

    setItem (item) {
      this.setState({item : item})
    }

    LikeMovie(event){
      event.target.className ="fas fa-heart fa-2x";
      console.log(this.state);
      localStorage.setItem('id', this.state.item.id);
    }
  
    render() {
        const input = this.state;
        return (
          <div className="container">
          <div class="row">
            <div className=" individual-movie col-12">
            <img src={input.url + input.item.poster_path} alt="o" />
            <div className="icon"> 
              <i className="far fa-heart fa-2x" onClick={this.LikeMovie.bind(this)}></i>
              <i className="fal fa-heart-broken"></i>
            </div>
            <h1>{input.item.title}</h1>
            <p>{input.item.release_date}</p>
            <p> {input.item.vote_average}</p>
            <p> {input.item.overview}</p>
            </div>
          </div>
        </div>
        );
      }

}