import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Home from "./Home.js"
import ArtistsPage from "./ArtistsPage";
import SongsPage from "./SongsPage";

const Pages = () => {

  return(
      <Router>
          <Route exact path="/" component= {Home} />
          <Route path = "/artists" component = {ArtistsPage} />
          <Route path = "/songs" component = {SongsPage} />
      </Router>
  );
};
export default Pages;