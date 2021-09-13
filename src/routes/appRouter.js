import React from "react";
import {  BrowserRouter as Router, Switch } from "react-router-dom";
import PublicRoute from "./publicroutes";
import PrivateRoute from "./privateroutes";
import Home from "../components/Home/Home";

const routes = (
  <Router>
      <Switch>
        <PublicRoute exact path="/" component={Home} />
      </Switch>
  </Router>
);
export default routes;
