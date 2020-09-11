import React, { Component } from "react";
import store from "../store";

class DisplayNumber extends Component {
  //store값 가져오기
  state = { number: store.getState().number };
  constructor(props) {
    super(props);
    store.subscribe(
      function () {
        this.setState({ number: store.getState().number });
      }.bind(this)
    );
  }
  render() {
    return (
      <div>
        <h1>DisplayNumber</h1>
        <input type="text" value={this.state.number} readOnly />
      </div>
    );
  }
}
export default DisplayNumber;
