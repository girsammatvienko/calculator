import React from "react";
import {DigitsProps, OperatorsProps} from "../props/props";
import Button from "@mui/material/Button";

const Digits: React.FC<DigitsProps> = ({createDigits, calculate, }) => {
    return (
        <div className="digits">
        { createDigits() }
        <Button variant={"contained"} onClick={() => calculate()}>=</Button>
        </div>
    );
}

export default Digits;