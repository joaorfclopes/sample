import React from "react";
import Main from "./views/Main";
import $ from "jquery";

function App() {
  $(document).ready(function() {
    $(this).scrollTop(0);
  });
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
