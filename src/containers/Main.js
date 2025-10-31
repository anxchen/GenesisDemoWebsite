import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Features from "../pages/features/Features";
import About from "../pages/about/About";
import SignUp from "../pages/signup/SignUp";

export default class Main extends Component {
  render() {
    const theme = this.props.theme;
    console.log(theme);

    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Home {...props} theme={this.props.theme} />}
          />
          <Route
            path="/features"
            render={(props) => <Features {...props} theme={this.props.theme} />}
          />
          <Route
            path="/about"
            render={(props) => <About {...props} theme={this.props.theme} />}
          />
          <Route
            path="/signup"
            render={(props) => <SignUp {...props} theme={this.props.theme} />}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}
