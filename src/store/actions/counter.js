import * as types from "../action-types";
const counter = {
  increment() {
    return { type: types.ADD };
  },
  decrement() {
    return { type: types.MINUS };
  },
};
export default counter;