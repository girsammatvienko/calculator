import React from "react";
import Button from "@mui/material/Button";
import {DisplayProps} from "../props/props";


const Display: React.FC<DisplayProps> = ({result, calc}) => {
    return (<div className="display">
                { result ? <span>{result}</span>: ''} {calc || "0"}
            </div>);
}

// const Card: React.FC<CardProps> = ({height, width, children, onClick}) => {
//     return (
//         <div style={{height, width, border: "1px solid gray"}} onClick={onClick}>
//             {children}
//         </div>
//     );
// }
export default Display;