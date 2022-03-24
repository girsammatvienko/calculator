import React, {useState} from "react";
import Button from "@mui/material/Button";

interface ExampleProps {

}
const Example: React.FC<ExampleProps> = ({}) => {
    return (<Button variant={"contained"}>button</Button>
    );
}

// const Card: React.FC<CardProps> = ({height, width, children, onClick}) => {
//     return (
//         <div style={{height, width, border: "1px solid gray"}} onClick={onClick}>
//             {children}
//         </div>
//     );
// }
export default Example;
