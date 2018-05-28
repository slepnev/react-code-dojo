import React, {Component} from "react";
import {Redirect, Route} from "react-router-dom";

const AuthRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (auth) ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/auth",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default AuthRoute;