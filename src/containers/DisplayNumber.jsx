import React, { Component } from "react";
import DisplayNumber from "../components/DisplayNumber";
import store from "../store";

export default class extends Component {
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
    return <DisplayNumber number={this.state.number} />;
  }
}
