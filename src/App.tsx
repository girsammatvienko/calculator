import React, {useState} from 'react';
import Button from '@mui/material/Button'
import example from './Example';
import Example from "./Example";

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
      <div className="calculator">
          <div className="display">
              { result ? <span>{result}</span>: ''} {calc || "0"}
          </div>
        <div className="keypad">
        <div className="operators">
            <Button variant={"contained"} color="success" onClick={() => updateCalc('+')}>+</Button>
            <Button variant={"contained"} color="success"  onClick={() => updateCalc('-')}>-</Button>

            <Button variant="contained" color="success" onClick={() => clear()}>C</Button>
        </div>

          <div className="digits">
              { createDigits() }
              <Button variant={"contained"} onClick={() => calculate()}>=</Button>
          </div>

      </div>
      </div>
    </div>
  );
}

export default App;
