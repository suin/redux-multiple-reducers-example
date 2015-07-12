import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "redux/react";

import * as counter1Actions from "actions/counter1Actions";

@connect(state => ({
  counter1: state.counter1
}))
export default class Counter1 {
  static propTypes = {
    counter1: React.PropTypes.number.isRequired
  }

  componentDidMount() {
    console.info("counter1 component did mount.");
  }

  onClick() {
    console.info("counter1 button was clicked.");
    const action = bindActionCreators(counter1Actions, this.props.dispatch);
    action.increment();
  }

  render() {
    return (
      <div>
        <h1>Counter 1</h1>
        <button onClick={::this.onClick}>increment</button>
        <div>Total: <span>{this.props.counter1}</span></div>
      </div>
    );
  }
}
