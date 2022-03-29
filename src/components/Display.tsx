import React from "react";
import {DisplayProps} from "../props/props";


const Display: React.FC<DisplayProps> = ({result, intermediateValue}) => {
    return (
        <div className="display">
                { result ? <span>{result}</span>: ''} {intermediateValue || "0"}
            </div>
    );
}

export default Display;
