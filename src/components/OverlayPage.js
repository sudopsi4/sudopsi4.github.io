import "./OverlayPage.css";
import {IoArrowBackCircleOutline} from 'react-icons/io5';
import { contentMap } from "./PageContent";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

export const OverlayPage = (props) =>{

    return <div className="overlay-page">
        <div className="container1">
        <div className="action-header">
            <div className="close-button">{
                <Link to="/" onClick={props.closeOverlayCallback} className="close-link"><IoArrowBackCircleOutline
                size={35}
                /></Link>
                }</div>
        </div>
        <LazyLoadImage className="op-image" src={contentMap[props.title].image} />

        <div className="title">
            {props.title}
        </div>
        <div className="content">
            {contentMap[props.title].content}
        </div>
        <div className="action-footer">
            {contentMap[props.title].action===undefined?null:<div 
            className="op-action-button"
            onClick={() => {
                var win = window.open(contentMap[props.title].link, '_blank');
                win.focus();
            }}
            >
                {contentMap[props.title].action}
            </div>}
        </div>
        </div>
    </div>
}