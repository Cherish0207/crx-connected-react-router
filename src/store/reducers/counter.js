import * as types from "../action-types";
function counterReducer(state = { number: 0 }, action) {
  switch (action.type) {
    case types.ADD:
      return { number: state.number + 1 };
    case types.MINUS:
      return { number: state.number - 1 };
    default:
      return state;
  }
}
export default counterReducer;
