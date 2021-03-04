import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import MyClock from "./MyClock.js";
import Factorial from "./Factorial.js";
ReactDOM.render(<Factorial number="6" />, document.getElementById("root"));
/*
function clock() {
  ReactDOM.render(<App date={new Date()} />, document.getElementById("root"));
}
setInterval(clock, 1000);

ReactDOM.render(<MyClock />, document.getElementById("root"));
*/
