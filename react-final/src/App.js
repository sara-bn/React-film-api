import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Nav from "./Nav";
import "./styles.css";
import Discover from "./Discover";
import SearchResult from "./Search_result";
import IndividualMovie from "./IndividualMovie";
import MyFavorites from "./MyFavorites";
import MyRated from "./MyRated";
import Footer from "./Footer";

function App(){
  return(
    <Router>
        <div>
        <Nav />
        <Switch>
           <Route exact path="/" component={Home} />
           <Route path="/about" component={About} />
           <Route path="/discover" component={Discover} />
           <Route path="/Search_result" component={SearchResult} />
           <Route path="/movie/:id" component={IndividualMovie} />
           <Route path="/my_favorites" component={MyFavorites} />
           <Route path="/my_rated" component={MyRated} />
         </Switch>
         <Footer/>
        </div>
    </Router>
  );
}


export default App;
