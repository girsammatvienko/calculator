import React from "react";
import {KeypadProps} from "../props/props";
import Operators from "./Operators";
import Digits from "./Digits";

const Keypad: React.FC<KeypadProps> = ({updateCalc, clear, createDigits, calculate}) => {
    return (
        <div className="keypad">
            <Operators
                updateCalc={updateCalc}
                clear={clear}
                />

            <Digits
                createDigits={createDigits}
                calculate={calculate}/>
        </div>
            );
}

export default Keypad;