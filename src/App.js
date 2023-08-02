import "./App.css";
import { GridStateComponent, buildGrid } from "./components/Grid";
import React from "react";
import { contentMap, title, words } from "./components/PageContent";
import { HashRouter, Routes, Route, Outlet} from "react-router-dom";

function App() {

  const _words = Object.keys(contentMap);
  const _title = title;

  const grid = buildGrid(_words,_title);
  return (
    <div className="App">
      <GridStateComponent
      grid={grid}
      words={_words}
      />
    </div>
  );
}

export default App;

