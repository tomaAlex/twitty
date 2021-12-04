import React from "react";
import { PreviewerProps } from "../types/Previewer";
import '../styles/Previewer.css';

const Previewer = (props: PreviewerProps) => {
    return (
        <div 
            className={'preview-container'} 
            style={props.style} 
            onMouseEnter={props.onMouseEnter} 
            onMouseLeave={props.onMouseLeave}
            onClick={props.onClick}
        >
            <p className={'caption'}>{props.captions.top}</p>
            <img className={'preview'} {...props.image} alt={'template-meme-background'} />
            <p className={'caption'}>{props.captions.bottom}</p>
        </div>
    );
}

export default Previewer;