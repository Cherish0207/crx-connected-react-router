import { combineReducers } from "redux";
import counter from "./counter";
import { connectRouter } from "connected-react-router";
import history from "../../history";
let reducers = {
  router: connectRouter(history),
  counter,
};
let rootReducer = combineReducers(reducers);
export default rootReducer;
