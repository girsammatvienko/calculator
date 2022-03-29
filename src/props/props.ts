interface DisplayProps {
    result: string,
    intermediateValue: string;
}

interface KeypadProps {
    operators: string[];
    updateCalculation: (value: string) => void;
    clear: () => void;
    digits: JSX.Element[]
    calculate: () => void;
}

interface OperatorsProps {
    updateCalculation: (value: string) => void;
    operators: string[]
    clear: () => void;
}

interface DigitsProps {
    digits: JSX.Element[]
    calculate: () => void;
}


export type {
    DisplayProps,
    KeypadProps,
    OperatorsProps,
    DigitsProps
};
