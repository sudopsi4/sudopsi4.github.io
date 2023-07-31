import "./App.css";
import { GridStateComponent, buildGrid } from "./components/Grid";
import React from "react";

function App() {

  const words = ["ABOUT", "BLOG", "YOUTUBE", "TWITTER", "GRAM", "GITHUB"];
  const titles = ["HELLO","HOLA","BONJOUR","HALLO","CIAO","HEJ","PRIVET","NI-HAO","NAMASTE"];
  const title = titles[Math.floor(Math.random()*titles.length)]

  const grid = buildGrid(words,title);
  return (
    <div className="App">
      <GridStateComponent
      grid={grid}
      />
    </div>
  );
}

export default App;

