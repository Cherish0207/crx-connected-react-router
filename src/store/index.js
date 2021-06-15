import { applyMiddleware, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import history from "../history";
import rootReducer from "./reducers";

// routerMiddleware：拦截跳转路径的 action
const store = applyMiddleware(routerMiddleware(history))(createStore)(
  rootReducer
);
export default store;
