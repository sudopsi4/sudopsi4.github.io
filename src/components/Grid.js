import { Grid, GridBox } from "./GridComponents";
import { calculateGridItemsAndRows, randomLetter } from "../util";
import React from "react";

export function buildGrid(words, title) {
  const colsAndRows = calculateGridItemsAndRows(40, 40, 5, 20);


  const cols = colsAndRows["cols"];
  const rows = colsAndRows["rows"];

  if((cols-title.length)%2!==0){
    title = title+'~';
  }

  let grid = Array.from({ length: rows }, () => new Array(cols).fill({value : '', type : 'empty'}));

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
          if (grid[r + i][c]['type'] !== 'empty' && grid[r + i][c]["value"] !== w[i]) {
            validPlacement = false;
            break;
          }
        } else {
          if (grid[r][c + i]['type'] !== 'empty' && grid[r][c + i]["value"] !== w[i]) {
            validPlacement = false;
            break;
          }
        }
      }

      if (validPlacement) {
        for (let i = 0; i < w.length; i++) {
          if (isVertical) {
            grid[r + i][c] = { value: w[i], wordNumber: wi, type : (grid[r + i][c].type==='title'?'title-clue':'clue') };
          } else {
            grid[r][c + i] = { value: w[i], wordNumber: wi, type : (grid[r][c + i].type==='title'?'title-clue':'clue')};
          }
        }
        put = 1;
        wi++;
      }
    }
  }

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c]['type'] === 'empty') {
        grid[r][c] = { value: randomLetter(), type: "random" };
      }
    }
  }

  return grid;
}

export class GridStateComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {highlightedIndex: null,show : false,selectedIndex : null};
      }

       handleMouseEnter = (wordIndex) => {
        this.setState({highlightedIndex:wordIndex});
      };
    
       handleMouseLeave = () => {
        this.setState({highlightedIndex:null});
      };
    
       handleClick = (wordIndex) => {
        this.setState({selectedIndex:wordIndex,show:true});
      };

      closeOverlay = () => {
        this.setState({selectedIndex:null,show:false});
      }
    

    render() {
        const grid = this.props.grid;
        const words = this.props.words;

        const newgrid = grid.map((row, r) => (
            [
              row.map((obj, c) => (
                <GridBox
                letter={obj.value}
                type={obj.type}
                wordNumber={obj.type==='clue' || obj.type==='title-clue'?obj.wordNumber:-1}
                highlightedIndex={this.state.highlightedIndex}
                handleMouseEnter={this.handleMouseEnter}
                handleMouseLeave={this.handleMouseLeave}
                handleClick={this.handleClick}
        
                />
              ))
              ]
          ))

        return(
            <Grid
  boxes={newgrid} 
  words={words}
  selectedIndex={this.state.selectedIndex}
  show={this.state.show}
  closeOverlayCallback={this.closeOverlay}
  />
        );
    }
}

