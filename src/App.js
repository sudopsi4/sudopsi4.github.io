import "./App.css";
import {Grid, GridBox} from "./components/GridComponents";
import { calculateGridItemsAndRows, randomLetter } from "./util";
import React from "react";


function buildGrid() {

  const colsAndRows = calculateGridItemsAndRows(40,40,5,20)
  const words = ["ABOUT", "BLOG", "YOUTUBE"];
  const title = "TESSELWOLF";

  const cols = colsAndRows['cols'];
  const rows = colsAndRows['rows'];

  let grid = Array.from({ length: rows }, () => new Array(cols).fill(0));

  const centreRow = Math.floor(rows / 2);
  const leftIndent = Math.floor((cols - title.length) / 2);

  for (let i = 0; i < title.length; i++) {
    grid[centreRow][leftIndent + i] = <GridBox letter={title[i]} type="title"/>;
  }

  for (const w of words) {
    let put = 0;
    while (put === 0) {
      const isVertical = Math.random() > 0.5;
      const maxR = isVertical ? rows - w.length : rows;
      const maxC = isVertical ? cols : cols - w.length;
      const r = Math.floor(Math.random() * maxR);
      const c = Math.floor(Math.random() * maxC);

      let validPlacement = true;
      for (let i = 0; i < w.length; i++) {
        if (isVertical) {
          if (grid[r + i][c] !== 0 && grid[r + i][c] !== w[i]) {
            validPlacement = false;
            break;
          }
        } else {
          if (grid[r][c + i] !== 0 && grid[r][c + i] !== w[i]) {
            validPlacement = false;
            break;
          }
        }
      }

      if (validPlacement) {
        for (let i = 0; i < w.length; i++) {
          if (isVertical) {
            grid[r + i][c] = w[i];
          } else {
            grid[r][c + i] = w[i];
          }
        }
        put = 1;
      }
    }
  }

  for(let r = 0;r<grid.length;r++){
    for(let c = 0; c<grid[r].length;c++){
      if(grid[r][c] === 0){
        grid[r][c] = <GridBox/>
      }
      if(!React.isValidElement(grid[r][c])){
        grid[r][c] = <GridBox letter={grid[r][c]} type="clue"/>
      }
    }
  }

  return grid;
}

function App() {
  const grid = buildGrid();
  return (
    <div className="App">
      <Grid
      boxes={grid}
      />
    </div>
  );
}

export default App;
