import React from "react";
import Navbar from "../components/Navbar";
import Home from "./Home";
import About from "./About";
import Contacts from "./Contacts";
import ReactDelayRender from "react-delay-render";

function Main() {
  return (
    <div className="main">
      <Navbar />
      <Home />
      <About />
      <Contacts />
    </div>
  );
}

export default ReactDelayRender({ delay: 1000 })(Main);
