import React from "react";
import {KeypadProps} from "../props/props";
import Operators from "./Operators";
import Digits from "./Digits";

const Keypad: React.FC<KeypadProps> = ({operators, updateCalculation, clear, digits, calculate}) => {
    return (
        <div className="keypad">
            <Operators
                updateCalculation={updateCalculation}
                clear={clear}
                operators={operators}/>
            <Digits
                digits={digits}
                calculate={calculate}/>
        </div>
    );
}

export default Keypad;
