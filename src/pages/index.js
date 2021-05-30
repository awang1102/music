import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Home from "./Home.js"
import ArtistsPage from "./ArtistsPage";
import SongsPage from "./SongsPage";
import Profile from "./Profile"
import Recommend from "./Recommend"


const Pages = () => {

  return(
      <Router>
          <Route exact path="/" component= {Home} />
          <Route path = "/artists" component = {ArtistsPage} />
          <Route path = "/songs" component = {SongsPage} />
          <Route path = "/profile" component = {Profile} />
          <Route path = "/recommendations" component = {Recommend} />
      </Router>
  );
};
export default Pages;