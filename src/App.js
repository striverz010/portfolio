import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Work from "./components/Work/work";
import Skill from "./components/Skills/skills";
import Contact from "./components/Contact/contact";

function App() {
  return (
    <div className="App">
      <Navbar/>  
      <Intro/>
      <About/>
      <Work/>
      <Skill/>
      <Contact/>
    </div>
  );
}

export default App;
