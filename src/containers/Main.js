import React, { Component } from "react";
import { Route, Switch, HashRouter, Redirect } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import About from "../pages/about/About";
import SignUp from "../pages/signup/SignUp";

export default class Main extends Component {
  render() {
    const theme = this.props.theme;
    console.log(theme);

    return (
      <div>
        <HashRouter basename="/">
          <Switch>
            <Redirect exact from="/" to="/features" />
            <Route
              path="/features"
              render={(props) => <Home {...props} theme={this.props.theme} />}
            />
            <Route
              path="/about"
              render={(props) => <About {...props} theme={this.props.theme} />}
            />
            <Route
              path="/signup"
              render={(props) => <SignUp {...props} theme={this.props.theme} />}
            />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}
