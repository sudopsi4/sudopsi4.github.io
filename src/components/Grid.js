import { Grid, GridBox } from "./GridComponents";
import { calculateGridItemsAndRows, randomLetter } from "../util";
import React from "react";

export function buildGrid(words, title) {
  const colsAndRows = calculateGridItemsAndRows(40, 40, 5, 20);


  const cols = colsAndRows["cols"];
  const rows = colsAndRows["rows"];

  let grid = Array.from({ length: rows }, () => new Array(cols).fill(0));

  const centreRow = Math.floor(rows / 2);
  const leftIndent = Math.floor((cols - title.length) / 2);

  for (let i = 0; i < title.length; i++) {
    grid[centreRow][leftIndent + i] = { value: title[i], type: "title" };
  }


  let wi = 0;
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
          if (grid[r + i][c] !== 0 && grid[r + i][c]["value"] !== w[i]) {
            validPlacement = false;
            break;
          }
        } else {
          if (grid[r][c + i] !== 0 && grid[r][c + i]["value"] !== w[i]) {
            validPlacement = false;
            break;
          }
        }
      }

      if (validPlacement) {
        for (let i = 0; i < w.length; i++) {
          if (isVertical) {
            grid[r + i][c] = { value: w[i], wordNumber: wi, type : 'clue' };
          } else {
            grid[r][c + i] = { value: w[i], wordNumber: wi, type : 'clue'};
          }
        }
        put = 1;
        wi++;
      }
    }
  }

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === 0) {
        grid[r][c] = { value: randomLetter(), type: "random" };
      }
    }
  }

  return grid;
}

export const GridStateComponent = (props) => {

    const grid = props.grid;

  const [highlightedIndex, setHighlightedIndex] = React.useState(null);

  const handleMouseEnter = (wordIndex) => {
    console.log(highlightedIndex)
    setHighlightedIndex(wordIndex);
  };

  const handleMouseLeave = () => {
    console.log(highlightedIndex)
    setHighlightedIndex(null);
  };

  const handleClick = (wordIndex) => {
    console.log(highlightedIndex)
    // setHighlightedIndex((prevIndex) =>
    //   prevIndex === wordIndex ? null : wordIndex
    // );
  };

const newgrid = grid.map((row, r) => (
    [
      row.map((obj, c) => (
        <GridBox
        letter={obj.value}
        type={obj.type}
        wordNumber={obj.type==='clue'?obj.wordNumber:-1}
        highlightedIndex={highlightedIndex}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        handleClick={handleClick}

        />
      ))
      ]
  ))

  return <Grid boxes={newgrid} />;
};
