import React from "react";
import {DigitsProps, OperatorsProps} from "../props/props";
import Button from "@mui/material/Button";

const Digits: React.FC<DigitsProps> = ({createDigits, result}) => {
    return (
        <div className="digits">
        { createDigits() }
        <Button variant={"contained"} href={`/result/${result}`}>=</Button>
        </div>
    );
}

export default Digits;