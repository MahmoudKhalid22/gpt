import React from "react";
import "./App.css";
import { Article, Brand, Cta, Feature, NavBar } from "./components";
const App = () => {
  return (
    <div className="gradient-bg">
      <NavBar />
      <Feature />
      <Cta />
      <Brand />
      <Article />
      <a>mahmoud khalid</a>
    </div>
  );
};

export default App;
