import React, { Component } from "react";
import Main from "./views/Main";

let body = document.getElementsByTagName("body")[0];

class App extends Component {
  load() {
    body.style.overflow = "hidden";
    this.props.showLoader();
  }

  componentWillMount() {
    this.load();
  }

  renderApp() {
    document.onreadystatechange = () => {
      if (document.readyState === "complete") {
        setTimeout(() => {
          body.style.overflow = "visible";
          this.props.hideLoader();
        }, 1000);
      }
    };
  }

  componentDidMount() {
    this.renderApp();
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
