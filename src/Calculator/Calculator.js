import React from "react";
import "./calculator.css";
import CalScreen from "./CalScreen/CalScreen";
import Keypad from "./Keypad/Keypad";
import { GetVal } from "./Keypad/Keypad";
// import ComputationScreen from "./CalScreen/ComputationScreen/ComputationScreen";
// import ResultScreen from "./CalScreen/ResultScreen/ResultScreen";

export default function Calculator() {
    return ( <
        >
        <
        GetVal >
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
        Calculator <
        /h2> <
        CalScreen / >
        <
        Keypad / >
        <
        /div> <
        /div> <
        /div> <
        /div> <
        /GetVal> <
        />
    );
}