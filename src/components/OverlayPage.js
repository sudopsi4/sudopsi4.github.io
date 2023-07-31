import "./OverlayPage.css";
import {IoArrowBackCircleOutline} from 'react-icons/io5';
import { contentMap } from "./PageContent";

export const OverlayPage = (props) =>{

    return props.show?<div className="overlay-page">
        <div className="container1">
        <div className="action-header">
            <div className="close-button" onClick={props.closeOverlayCallback}>{
                <IoArrowBackCircleOutline
                size={35}
                />
                }</div>
        </div>
        <div className="op-image-holder">
            <img className="op-image" src={contentMap[props.title].image}/>
        </div>
        <div className="title">
            {props.title}
        </div>
        <div className="content">
            {contentMap[props.title].content}
        </div>
        <div className="action-footer">
        </div>
        </div>
    </div>:null
}