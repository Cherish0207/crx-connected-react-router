import React from "react";
import ReactDOM from "react-dom";
import { Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Counter from "./components/Counter";
import store from "./store";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import history from "./history";
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <>
        <Link exact={true} to="/">
          Home
        </Link>
        <Link to="/counter">Counter</Link>
        <Route exact={true} path="/" component={Home} />
        <Route path="/counter" component={Counter} />
      </>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
/**
 * hashRouter、BrowserRouter内部都是调用react-router库里的Router,只不过分别传入不同的history对象
 */
