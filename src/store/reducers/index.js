import { combineReducers } from "redux";
import counter from "./counter";
let reducers = {
  counter,
};
let rootReducer = combineReducers(reducers);
export default rootReducer;
