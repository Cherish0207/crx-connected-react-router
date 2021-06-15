import * as types from "../action-types";
import { push } from "../../connected-react-router";
const counter = {
  increment() {
    return { type: types.ADD };
  },
  decrement() {
    return { type: types.MINUS };
  },
  go(path) {
    // this.props.history.push(path); 这个文件里没有 history
    // dispatch.push(targetPath)
    return push(path);
  },
};
export default counter;
