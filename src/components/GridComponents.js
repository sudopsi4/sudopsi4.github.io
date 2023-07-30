import { randomLetter } from "../util";

function GridBox(props) {
    return (
        <div
            key={props.index}
            className={props.type==='title'?"grid-item-title":(props.type==='clue'?"grid-item-clue":"grid-item")}
            style={{animationDelay: props.type==='clue'?(props.wordNumber*3).toString()+"s":null}}
            >
            {props.letter?props.letter:randomLetter()}
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