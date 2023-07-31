import { randomLetter } from "../util";

function GridBox(props) {
    return (
        <div
            key={props.index}
            className={
                props.highlightedIndex === props.wordNumber?'highlighted':
                (props.type==='title'?'grid-item-title':
                (props.type==='clue'?'grid-item-clue':'grid-item'))
            }
            style={{animationDelay: props.type==='clue'?(props.wordNumber*3).toString()+"s":null}}
            onMouseEnter={props.type==='clue'?() => props.handleMouseEnter(props.wordNumber):null}
            onMouseLeave={props.type==='clue'?props.handleMouseLeave:null}
            onClick={props.type==='clue'?() => props.handleClick(props.wordNumber):null}
            >
            {props.letter}
        </div>
    );
}

const Grid = (props) => {
    return(
        <div className="grid-container">
            {props.boxes}
        </div>
    )
} 

export {GridBox,Grid};