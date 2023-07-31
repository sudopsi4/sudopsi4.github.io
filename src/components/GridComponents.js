import { randomLetter } from "../util";
import { OverlayPage } from "./OverlayPage";

function GridBox(props) {
    return (
        <div
            key={props.index}
            className={
                props.highlightedIndex === props.wordNumber?'highlighted':
                (props.type==='title'?'grid-item-title':
                (props.type==='clue'?'grid-item-clue':(
                    props.type==='title-clue'?'grid-item-title-clue':'grid-item'
                )))
            }
            style={{animationDelay: props.type==='clue' || props.type==='title-clue'?(props.wordNumber*3).toString()+"s":null}}
            onMouseEnter={props.type==='clue' || props.type==='title-clue'?() => props.handleMouseEnter(props.wordNumber):null}
            onMouseLeave={props.type==='clue' || props.type==='title-clue'?props.handleMouseLeave:null}
            onClick={props.type==='clue' || props.type==='title-clue'?() => props.handleClick(props.wordNumber):null}
            >
            {props.letter}
        </div>
    );
}

const Grid = (props) => {
    return(
        [<div className="grid-container">
            {props.boxes}
        </div>,
        <OverlayPage
        title={props.words[props.selectedIndex]}
        show={props.show}
        closeOverlayCallback={props.closeOverlayCallback}
        />    
    ]
    )
} 

export {GridBox,Grid};