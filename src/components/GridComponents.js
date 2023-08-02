import {
  Route,
  Routes,
  Link,
} from "react-router-dom";
import { OverlayPage } from "./OverlayPage";

function GridBox(props) {

    const commonProps = {
        key : props.index,
      className : (
        props.highlightedIndex === props.wordNumber
          ? "highlighted"
          : props.type === "title"
          ? "grid-item-title"
          : props.type === "clue"
          ? "grid-item-clue"
          : props.type === "title-clue"
          ? "grid-item-title-clue"
          : "grid-item"
      ),
      style:{
        animationDelay:
          props.type === "clue" || props.type === "title-clue"
            ? (props.wordNumber * 3).toString() + "s"
            : null,
      },
      onMouseEnter:(
        props.type === "clue" || props.type === "title-clue"
          ? () => props.handleMouseEnter(props.wordNumber)
          : null
      ),
      onMouseLeave:(
        props.type === "clue" || props.type === "title-clue"
          ? props.handleMouseLeave
          : null
      )
    }


  return (
    props.type === "clue" || props.type === "title-clue"?<Link to={'/'+props.word} {...commonProps}>{props.letter}</Link>:<div {...commonProps}>{props.letter}</div>
  );
}

const Grid = (props) => {
  return [
    <div>
      <Routes>
        <Route
          path="/"
          element={<div className="grid-container">{props.boxes}</div>}
        />
        {props.words.map((word) => {
          return <Route
            path={"/" + word}
            element={
              <OverlayPage
                title={word}
                closeOverlayCallback={props.closeOverlayCallback}
              />
            }
          />
})}
      </Routes>
    </div>,
  ];
};

export { GridBox, Grid };
