import React, { Component } from "react";
import Main from "./views/Main";
class App extends Component {
  
  componentDidMount() {
    this.props.hideLoader();
  }

  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
