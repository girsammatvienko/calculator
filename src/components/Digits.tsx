import React from "react";
import {DigitsProps} from "../props/props";
import Button from "@mui/material/Button";

const Digits: React.FC<DigitsProps> = ({digits, calculate}) => {
    return (
        <div className="digits">
            {digits}
            <Button
                variant={"contained"}
                onClick={() => calculate()}>
                =
            </Button>
        </div>
    );
}

export default Digits;