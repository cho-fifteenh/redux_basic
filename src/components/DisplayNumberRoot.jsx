import React, { Component } from "react";
import DisplayNumber from "../components/DisplayNumber";
class DisplayNumberRoot extends Component {
  render() {
    return (
      <div>
        <h1>DisplayNumber Root</h1>
        <DisplayNumber number={this.props.number} />
      </div>
    );
  }
}
export default DisplayNumberRoot;
