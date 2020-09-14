import AddNumber from "../components/AddNumber";
import { connect } from "react-redux";
function mapDispatchToPropx(dispatch) {
  return {
    onClick: function (size) {
      dispatch({ type: "INCREMENT", size: size });
    },
  };
}

export default connect(null, mapDispatchToPropx)(AddNumber); //상태를 전달하는게 없기 때문에 첫번째 인자는 null로

// import React, { Component } from "react";
// import store from "../store";

// export default class extends Component {
//   render() {
//     return (
//       <AddNumber
//         onClick={function (size) {
//           store.dispatch({ type: "INCREMENT", size: size });
//         }.bind(this)}
//       />
//     );
//   }
// }
