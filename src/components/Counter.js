import React from "react";
import { connect } from "react-redux";
import actions from "../store/actions/counter";
class Counter extends React.Component {
  render() {
    return (
      <>
        <p>{this.props.number}</p>
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
        <button onClick={()=>this.props.go('/')}>goBack</button>
      </>
    );
  }
}
let mapStateToProps = (state) => state.counter;
export default connect(mapStateToProps, actions)(Counter);
