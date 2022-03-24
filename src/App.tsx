import React, {useState} from 'react';



function App() {
    const createDigits = () => {
        const digits = [];

        for(let i = 0;i < 10;i++) {
            digits.push(
                <button
                    onClick={() => updateCalc(i.toString())}
                    key={i}>
                    {i}
                </button>
            )
        }
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

        <div className="operators">
            <button onClick={() => updateCalc('+')}>+</button>
            <button onClick={() => updateCalc('-')}>-</button>

            <button onClick={() => clear()}>Delete</button>
        </div>

          <div className="digits">
              { createDigits() }
              <button>0</button>
              <button onClick={() => calculate()}>=</button>
          </div>

      </div>
    </div>
  );
}

export default App;
