import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import $ from "jquery";

$(document).ready(function() {
  $(this).scrollTop(0);
});

ReactDOM.render(<App />, document.getElementById("root"));
