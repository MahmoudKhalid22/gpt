import React from "react";
import "./App.css";
import { Article, Brand, Cta, Feature, NavBar } from "./components";
import { Blog, Features, Footer, Header, Possibility, GPT } from "./containers";
const App = () => {
  return (
    <div className='App'>
    <div className="gradient__bg">
      <NavBar />
      <Header />
      </div>
      <Brand />
      <GPT />
      {/* <Feature />
      <Possibility />
      <Cta />
      <Blog />
      <Footer /> */}
      
      {/* <Article /> */}
     
    </div>
  );
};

export default App;
