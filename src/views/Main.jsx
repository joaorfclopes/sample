import React from "react";
import Navbar from "../components/Navbar";
import Alert from "../components/AlertBrowser";
import Home from "./Home";
import About from "./About";
import Contacts from "./Contacts";
import { useMediaQuery } from "react-responsive";

export default function Main() {
  const isMobile = useMediaQuery({
    query: "(max-device-width: 700px)"
  });
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 700px)"
  });
  return (
    <div className="main">
      {isMobile && (
        <>
          <Navbar />
          <Home />
          <About />
          <Contacts />
        </>
      )}
      {isDesktop && (
        <>
          <Navbar />
          <Home />
          <About />
          <Contacts />
          <Alert />
        </>
      )}
    </div>
  );
}
