import React, { Component } from "react";
import DisplayNumber from "../containers/DisplayNumber";
class DisplayNumberRoot extends Component {
  render() {
    return (
      <div>
        <h1>DisplayNumber Root</h1>
        <DisplayNumber />
      </div>
    );
  }
}
export default DisplayNumberRoot;
