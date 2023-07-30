import { randomLetter } from "../util";

function GridBox(props) {
    return (
        <div key={props.index} className={props.type==='title'?"grid-item-title":"grid-item"} >
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