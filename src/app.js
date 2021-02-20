import React, { Component } from "react";
import { Switch, Route } from "react-router";

import HomePage from "./pages/HomePage";
import Aboutpage from "./pages/AboutPage";

import Layout from "./pages/Layout";


class app extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => {
              return <HomePage {...props} />;
            }}
          />
          <Route
            exact
            path="/about"
            render={(props) => {
              return <Aboutpage {...props} />;
            }}
          />
        </Switch>
      </Layout>
    );
  }
}
export default app;
