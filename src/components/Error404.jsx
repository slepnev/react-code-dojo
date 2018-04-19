import React, {Component} from "react";
import {Route, Router} from "react-router-dom"
import Auth from "../containers/Auth"
import createBrowserHistory from "history/createBrowserHistory"
import Year from "./Year"

const history = createBrowserHistory();

class Error404 extends Component {
  render() {
    return (
      <div className="container mt-4">
        <h1>Страница не найдена</h1>
        <div className="alert alert-danger mt-2"> Error 404 </ div>
      </div>
    )
  }
}

export default Error404;