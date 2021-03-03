import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import MyClock from "./MyClock.js";
ReactDOM.render(<MyClock />, document.getElementById("root"));
/*
function clock() {
  ReactDOM.render(<App date={new Date()} />, document.getElementById("root"));
}
setInterval(clock, 1000);*/
