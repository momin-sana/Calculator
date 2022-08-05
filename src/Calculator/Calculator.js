import React from "react";
import "./calculator.css";
import CalScreen from "./CalScreen/CalScreen";
import Keypad from "./CalScreen/Keypad/Keypad";
import { ContextProvider } from "../Calculator/ContextProvider";

function Calculator() {
    return ( <
        ContextProvider >
        <
        div className = "container" >
        <
        div className = "calculator" >
        <
        div className = "c-wrapper" >
        <
        div className = "ctc c-type" >
        <
        h2 className = "display-5 fw-bolder text-center text-white p-3" >
        Calculator { " " } <
        /h2>{" "} <
        CalScreen / >
        <
        Keypad / > { " " } <
        /div>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>{" "} <
        /ContextProvider>
    );
}

export default Calculator;