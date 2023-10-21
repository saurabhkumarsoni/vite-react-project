import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";
import "./index.css";
import SideNav from "./components/SideNav";
import Main from "./components/Main";
import Work from "./components/Work";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {



  return (
  <>
    <SideNav/>
    <Main/>
    <Work/>
    <Project/>
    <Contact/>
  </>
  );
}

export default App;
