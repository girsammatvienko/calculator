interface DisplayProps {
    result: string,
    calc: string;
}

interface KeypadProps {
    operators: string[];
    updateCalc: (value:string) => void;
    clear: () => void;
    createDigits: () => JSX.Element[];
    calculate: () => void;
    result: string
}

interface ResultProps {
    calc: string
}

interface OperatorsProps {
    updateCalc: (value:string) => void;
    clear: () => void;
}

interface DigitsProps {
    createDigits: () => JSX.Element[],
    calculate: () => void;
    result: string
}

interface CalculatorProps {
    result: string,
    calc: string,
    operators: string[],
    updateCalc: (value:string) => void,
    clear: () => void,
    createDigits: () => JSX.Element[],
    calculate: () => void;
}

export type {
    DisplayProps,
    CalculatorProps,
    KeypadProps,
    OperatorsProps,
    DigitsProps,
    ResultProps
};
