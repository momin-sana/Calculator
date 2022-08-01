import React, { useContext, useState } from "react";
import "./computationscreen.css";
import { GetVal } from "../../Keypad/Keypad";

export default function ComputationScreen() {
    const operand = useContext(GetVal);

    return ( <
        div className = "ctc c-compute" >
        <
        GetVal.Consumer > { <
            span > { operand ? operand : '0' }

            <
            /span>
        }

        <
        /GetVal.Consumer> <
        /div>
    );
}