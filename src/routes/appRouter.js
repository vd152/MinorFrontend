import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PublicRoute from "./publicroutes";
import PrivateRoute from "./privateroutes";
import Home from "../components/Home/Home";
import "../index.css";
import Login from "../components/Login/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const routes = (
  <React.Fragment>
    <Router>
      <Switch>
        <PublicRoute exact path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Home} />
      </Switch>
    </Router>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      theme="dark"
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover
    />
  </React.Fragment>
);
export default routes;
