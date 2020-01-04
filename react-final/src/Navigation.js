// Navigation.js

import React from "react";
import "./Navigation.css";
import Selection from "./Selection";
import Button from './Button'

class Navigation extends React.Component {
  componentDidMount() {
    fetch(this.props.url)
      .then(response => response.json())
      .then(data => this.props.setGenres(data.genres))
      .catch(error => console.log(error));
  }

  render() {
    const { genre, genres, onGenreChange, onChange, year, rating, runtime, onSearchButtonClick } = this.props;
    return (
      <section className="navigation">
        <Selection
          genre={genre}
          genres={genres}
          onGenreChange={onGenreChange}
        />


        <Button onClick={onSearchButtonClick}>
          Search
        </Button>

      </section>
    )
  }
}

export default Navigation;
