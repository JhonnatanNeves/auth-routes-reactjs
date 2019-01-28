import React from "react";
import { Route, Redirect } from "react-router-dom";

import Header from "../components/Header";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      // auth?
      localStorage.getItem("@Projeto:token") ? (
        <div>
          <Header />
          <Component {...props} />
        </div>
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
