import React from "react";
import "./App.css";
import { Brand, Cta, NavBar } from "./components";
import { Blog, Features, Footer, Header, Possibility, GPT } from "./containers";
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <NavBar />
        <Header />
      </div>
      <Brand />
      <GPT />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
