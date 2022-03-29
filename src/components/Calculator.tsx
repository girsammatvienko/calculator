import React, {useState} from "react";
import Display from "./Display";
import Keypad from "./Keypad";
import Button from "@mui/material/Button";


const Calculator: React.FC = () => {
    const digits = [...Array(10).keys()].map(d => {
        return (
        <Button
            variant={"contained"}
            onClick={() => updateCalculation(d.toString())}>{d}
        </Button>
        )
    })

    const [intermediateValue, setIntermediateValue] = useState("");
    const [result, setResult] = useState("");

    const operations = ['+', '-'];

    const updateCalculation = (value: string)  => {
        if (operations.includes(value) && intermediateValue === '' ||
            operations.includes(value) && operations.includes(intermediateValue.slice(-1))) {
            return;
        }

        if (!operations.includes(value)) {
            setResult(eval(intermediateValue + value).toString());
        }
        setIntermediateValue(intermediateValue + value);
    }

    const calculate = () => {
        setIntermediateValue(eval(intermediateValue).toString());
    }

    const clear = () => {
        setIntermediateValue("");
        setResult('0');
    }

    return (
        <div className="calculator">
        <Display
            intermediateValue={intermediateValue}
            result={result}/>
        <Keypad
            calculate={calculate}
            clear={clear}
            digits={digits}
            operators={operations}
            updateCalculation={updateCalculation}/>

    </div>);
}

export default Calculator;
