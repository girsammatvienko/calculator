import React from "react";
import {KeypadProps} from "../props/props";
import Operators from "./Operators";
import Digits from "./Digits";

const Keypad: React.FC<KeypadProps> = ({updateCalc, clear, createDigits, calculate, result}) => {
    return (
        <div className="keypad">
            <Operators
                updateCalc={updateCalc}
                clear={clear}
                />

            <Digits
                createDigits={createDigits}
                calculate={calculate}
                result={result}/>
        </div>
            );
}

export default Keypad;