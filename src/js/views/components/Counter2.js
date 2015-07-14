import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import * as counter2Actions from "actions/counter2Actions";

@connect(state => ({
  counter2: state.counter2
}))
export default class Counter2 {
  static propTypes = {
    counter2: React.PropTypes.number.isRequired
  }

  componentDidMount() {
    console.info("counter2 component did mount.");
  }

  onClick() {
    console.info("counter2 button was clicked.");
    const action = bindActionCreators(counter2Actions, this.props.dispatch);
    action.increment();
  }

  render() {
    return (
      <div>
        <h1>Counter 2</h1>
        <button onClick={::this.onClick}>increment</button>
        <div>Total: <span>{this.props.counter2}</span></div>
      </div>
    );
  }
}
