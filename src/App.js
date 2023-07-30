import "./App.css";
import {Grid, GridBox} from "./components/GridComponents";
import { calculateGridItemsAndRows, randomLetter } from "./util";


function buildGrid(sq) {
  const words = ["about", "blog", "youtube"];
  const title = "TESSELWOLF";

  const colsAndRows = calculateGridItemsAndRows(40,40,5,20)
  const cols = colsAndRows['cols']
  const rows = colsAndRows['rows']
  console.log(colsAndRows)

  let grid = [];

  for (let i = 0; i < rows; i++) {
    let line = [];
    if (i === Math.floor(rows / 2)) { // This is center line
      const fill = cols - title.length; // how many letter to fill on both sides of title
      const left = Math.floor(fill / 2); // on left side
      for (let f = 0; f < left; f++) { // Insert random letters on left
        line.push(<GridBox/>);
      }
      for(const t of title.split("")){ // Insert title
        line.push(<GridBox letter={t} type={"title"}/>)
      }
      for (let f = 0; f < fill - left; f++) { // Insert random letters on right
        line.push(<GridBox/>);
      }
      grid.push(line);
      continue;
    } 
    
    else { // For non-title lines
      for (let j = 0; j < cols; j++) {
        line.push(<GridBox/>);
      }
      grid.push(line);
    }
  }

  for(const w of words){
    const isVertical = Math.random()>0.5?1:0
    const [xlim,ylim] = isVertical?[cols,rows-w.length]:[cols-w.length,rows]
    
      const x = Math.floor(Math.random()*xlim)
      const y = Math.floor(Math.random()*ylim)
      if(isVertical){

      }
      else{

      }
  }

  return grid;
}

function App() {
  const grid = buildGrid(24);
  return (
    <div className="App">
      <Grid
      boxes={grid}
      />
    </div>
  );
}

export default App;
