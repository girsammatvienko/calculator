import React from "react";
import {OperatorsProps} from "../props/props";
import Button from "@mui/material/Button";

const Operators: React.FC<OperatorsProps> = ({updateCalc, clear}) => {
    return (
            <div className="operators">
                <Button variant={"contained"} color="success" onClick={() => updateCalc('+')}>+</Button>
                <Button variant={"contained"} color="success"  onClick={() => updateCalc('-')}>-</Button>

                <Button variant="contained" color="success" onClick={() => clear()}>C</Button>
            </div>
    );
}

export default Operators;