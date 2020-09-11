import { createStore } from "redux";

export default createStore(function (state, action) {
  if (state === undefined) {
    return { number: 0 };
  }
  if (action.type === "INCREMENT") {
    return { ...state, number: state.number + action.size }; //...state : state 복제 후, 복제된 state에서 propery값만 추가
  }
  return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());
