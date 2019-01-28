import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

// pages
import MainPage from "../pages/main";
import GuestPage from "../pages/guest";
import PrivatePage from "../pages/private";

// route
import GuestRoute from "./guest";
import PrivateRoute from "./private";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <GuestRoute exact path="/" component={MainPage} />
      <PrivateRoute exact path="/private" component={PrivatePage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
