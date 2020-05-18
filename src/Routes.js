import React, { Component } from "react";
import { Router, Switch, Route } from "react-router";

import Login from "./components/Login";
import home from "./home/home";
import history from "./history";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/kudos" exact component={Login} />
          <Route path="/kudos/home:myKey" component={home} />
        </Switch>
      </Router>
    );
  }
}
