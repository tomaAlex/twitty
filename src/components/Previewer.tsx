import React from "react";
import { PreviewerProps } from "../types/Previewer";

const Previewer = (props: PreviewerProps) => {
    return (
        <div>
            <p>{props.captions.top}</p>
            <img {...props.image} />
            <p>{props.captions.bottom}</p>
        </div>
    );
}

export default Previewer;