import React from "react";
import Button from "@mui/material/Button"; //todo unused imports
import {
    CalculatorProps,
    DisplayProps, //todo what do u need this for?
    KeypadProps
} from "../props/props";
import Display from "./Display";
import Keypad from "./Keypad";


const Calculator: React.FC<CalculatorProps> = ({result, calc, operators, updateCalc, clear, createDigits, calculate}) => {
    return (
        <div className="calculator">
        <Display
            result={result}
            calc={calc}/>
        <Keypad
            operators={operators}
            updateCalc={updateCalc}
            clear={clear}
            createDigits={createDigits}
            calculate={calculate}/>
    </div>);
}

export default Calculator;
