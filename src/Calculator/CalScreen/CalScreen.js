import React from "react";
import ComputationScreen from "./ComputationScreen/ComputationScreen";
import ResultScreen from "./ResultScreen/ResultScreen";

export default function CalScreen() {
    return ( <
        div className = "ctc c-screen" >
        <
        ResultScreen / >
        <
        ComputationScreen / >
        <
        /div>
    );
}