import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";

function App() {
  return (
    <div className="App">
      <Navbar/>  
      <Intro/>
      <About/>
    </div>
  );
}

export default App;
