import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Redirector from "./Redirector";
import { Dashboard, ErrorPage, HomePage, LoginPage, TestPage } from "./Pages";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <main>
        <ToastContainer />
        <Navbar />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/login" component={LoginPage} />
          <Route path="/test" component={TestPage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route component={ErrorPage} />
        </Switch>
        <Redirector />
      </main>
    );
  }
}

export default App;
