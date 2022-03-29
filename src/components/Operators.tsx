import React from "react";
import {OperatorsProps} from "../props/props";
import Button from "@mui/material/Button";

const Operators: React.FC<OperatorsProps> = ({operators, updateCalculation, clear}) => {
    return (
        <div className="operators">
            {operators.map(operator => {
                return (
                    <Button
                        variant={"contained"}
                        color="success"
                        onClick={() => updateCalculation(`${operator}`)}>
                        {operator}
                    </Button>
                )
            })}

            <Button variant={"contained"} color="success" onClick={() => clear()}>C</Button>
        </div>
    );
}

export default Operators;