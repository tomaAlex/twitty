import React from "react";
import { PreviewerProps } from "../types/Previewer";
import '../styles/Previewer.css';

const Previewer = (props: PreviewerProps) => {
    return (
        <div className={'container'}>
            <p>{props.captions.top}</p>
            <img className={'preview'} {...props.image} alt={'template-meme-background'} />
            <p>{props.captions.bottom}</p>
        </div>
    );
}

export default Previewer;