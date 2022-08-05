import React, { useContext } from "react";
import { NumberContext } from "../../ContextProvider";
import "./computationscreen.css";


export default function ComputationScreen() {
    const { number } = useContext(NumberContext);

    console.log("number", number);
    return (

        <
        div className = "ctc c-compute" > { " " } <
        span > { number } < /span>{" "}

        { " " } <
        /div>
    );
}