import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import Home from "./components/Home";
import Counter from "./components/Counter";
import store from "./store";
import { Provider } from "react-redux";
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Link exact={true} to="/">
        Home
      </Link>
      <Link to="/counter">Counter</Link>
      <Route exact={true} path="/" component={Home} />
      <Route path="/counter" component={Counter} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
