import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./landingpage";
import Preview from "./Preview";
import Upload from "./Upload";
import AboutUs from "./AboutUs";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutus" component={AboutUs} />
    <Route path="/Preview" component={Preview} />
    <Route path="/Upload" component={Upload} />
  </Switch>
);

export default Main;
