import React from "react";
import {useParams} from "react-router-dom";
import Button from "@mui/material/Button";

const ResultPage: React.FC = ({}) => {
    const { result } = useParams<{
        result: string;
    }>();
    return (
        <div className="result">
          <h2>Computation result: {result}</h2>
            <Button variant={"contained"} href={`/`}>Back</Button>
        </div>
    );
}

export default ResultPage;