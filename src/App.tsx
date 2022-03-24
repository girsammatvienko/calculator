import React, {useState} from 'react';
import Button from '@mui/material/Button'
import Calculator from "./components/Calculator";

function App() {
    const createDigits = () => {
        const digits = [];

        for(let i = 1;i < 10;i++) {
            digits.push(
                <Button
                    variant={"contained"}
                    onClick={() => updateCalc(i.toString())}
                    key={i}>
                    {i}
                </Button>
            )
        }
        digits.push(
            <Button
                variant={"contained"}
                onClick={() => updateCalc('0')}
                key={0}>
                0
            </Button>
        )
        return digits;
    }

        const [calc, setCalc] = useState("");
        const [result, setResult] = useState("");

        const ops = ['+', '-'];

        const updateCalc = (value: string)  => {
            if(ops.includes(value) && calc === '' ||
               ops.includes(value) && ops.includes(calc.slice(-1)
                )
            ) {
                return;
            }

            if(!ops.includes(value)) {
                setResult(eval(calc + value).toString());
            }
            setCalc(calc + value);
        }

        const calculate = () => {
            setCalc(eval(calc).toString());
        }

        const clear = () => {
            setCalc("");
            setResult('0');
        }
  return (
    <div className="App">
    <Calculator
        result={result}
        calc={calc}
        operators={ops}
        updateCalc={updateCalc}
        clear={clear}
        createDigits={createDigits}
        calculate={calculate}/>
    </div>
  );
}

export default App;
