import React from "react";

class MyFavorites extends React.Component {

  constructor(props){
    super(props);
    this.state = { 
      title : ' ',
      overview: '',
      vote_average: '',
      release_date : '',
      poster : '',
      url : `https://image.tmdb.org/t/p/w500/`};
      const id = props.match.params.id;

      this.componentDidMount();
}
  componentDidMount() {
    const title = localStorage.getItem('title') ;
    const poster = localStorage.getItem('poster') ;
    const overview = localStorage.getItem('overview') ;
    const release_date = localStorage.getItem('release_date') ;
    const vote_average = localStorage.getItem('vote_average') ;
    console.log(title)
    this.setState( {title : title,
                    overview: overview ,
                    poster : poster,
                    release_date  : release_date,
                    vote_average : vote_average}  );
    // console.log(item.title)
  }
  render(){
  return (
    <div className="fav-container container">
      <h1>My Favourite Movies</h1>
      <h2>{this.state.title}</h2>
      <img src={this.state.poster}/>
      <p> {this.state.release_date}</p>
      <p> {this.state.vote_average}</p>
      <p> {this.state.overview}</p>
    </div>
  );
  }
}
export default MyFavorites;
