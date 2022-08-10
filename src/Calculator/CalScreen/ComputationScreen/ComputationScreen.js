import React, { useContext } from "react";
import { NumberContext } from "../../ContextProvider";
import "./computationscreen.css";

export default function ComputationScreen() {
    const { number, storedNumber, functionType } = useContext(NumberContext);

    console.log("number", number);
    return ( <
        div className = "ctc c-compute" > { " " } <
        span className = { storedNumber && storedNumber.length > 12 ? 'long-stored-display' : undefined } > {!storedNumber ? 'ENTER SOME NUMBERS' : `${storedNumber} ${functionType} ${number}` } < /span> <
        /div>
    );
}