import React, { createContext, useState } from "react";
import ComputationScreen from "../CalScreen/ComputationScreen/ComputationScreen";
import "./keypad.css";

export const GetVal = createContext();

export default function Keypad() {
    const [val, setVal] = useState("");

    const handleOperand = (e) => {
        setVal(e.target.value);
    };

    return ( <
        GetVal.Provider value = { val } >
        <
        ComputationScreen / >
        <
        div className = "c-grid" >
        <
        button type = "button"
        className = "top-btn span-two"
        value = "ac"
        // onClick={handleOperator}
        >
        ac <
        /button> <
        button type = "button"
        className = "top-btn "
        value = "%"
        // onClick={handleOperator}
        >
        %
        <
        /button> <
        button type = "button"
        className = "top-btn special "
        value = "/"
        // onClick={handleOperator}
        >
        / <
        /button> <
        button className = "normal"
        value = "7"
        onClick = { handleOperand } >
        7 <
        /button> <
        button className = "normal"
        value = "8"
        // onClick={handleOperand}
        >
        8 { " " } <
        /button> <
        button className = "normal"
        value = "9"
        // onClick={handleOperand}
        >
        9 <
        /button> <
        button className = "special"
        value = "*"
        // onClick={handleOperator}
        >
        x <
        /button> <
        button className = "normal"
        value = "4"
        // onClick={handleOperand}
        >
        4 <
        /button> <
        button className = "normal"
        value = "5"
        // onClick={handleOperand}
        >
        5 <
        /button> <
        button className = "normal"
        value = "6"
        // onClick={handleOperand}
        >
        6 <
        /button> <
        button className = "special"
        value = "-"
        // onClick={handleOperator}
        >
        -
        <
        /button> <
        button className = "normal"
        value = "1"
        // onClick={handleOperand}
        >
        1 <
        /button> <
        button className = "normal"
        value = "2"
        // onClick={handleOperand}
        >
        2 <
        /button> <
        button className = "normal"
        value = "3"
        // onClick={handleOperand}
        >
        3 <
        /button> <
        button className = "special"
        value = "+"
        // onClick={handleOperator}
        >
        +
        <
        /button> <
        button className = "span-two normal"
        value = "0"
        // onClick={handleOperand}
        >
        0 <
        /button> <
        button className = "normal"
        value = "."
        // onClick={handleOperator}
        >
        . <
        /button> <
        button className = "special"
        value = "="
        // onClick={handleOperator}
        >
        = <
        /button> <
        /div> <
        /GetVal.Provider>
    );
}