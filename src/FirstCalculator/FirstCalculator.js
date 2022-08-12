import React, { useState } from "react";
import "./firstCalculator.css";

const FirstCalculator = () => {
    const [preAnswer, setPreAnswer] = useState("");
    const [answer, setAnswer] = useState("0");
    const [operand, setOperand] = useState("");

    // getting operand values from NUmberbutton by event handler
    const handleOperand = (e) => {
        const value = e.target.value;
        //previous operand(op) concludes to latest value
        setOperand((op) => op + value);

        //control max digit limit
        let checkOperand = operand;

        checkOperand = [...checkOperand, parseInt(e, 10)];
        console.log("checkoperand", checkOperand);
        if (operand[operand.length - 1] === "NaN") {
            operand.shift(); //.shit() removes and returns the first array element
            setOperand([...operand, parseInt(e, 10)]);
        } else if (operand.length > 23) {
            console.log("exceeded 23");
            setOperand(["MAX DIGIT LIMIT REACHED"]);
            setTimeout(() => {
                setOperand([""]);
            }, 5000);
            console.log("settimeout", setTimeout);
        }
    };

    const handleOperators = (e) => {
        let value = e.target.value;
        let newOperand;

        console.log("handleOperators", operand);



        //get last operand value, to avoid repeating the operator
        if (operand.slice(-1) === value) {
            newOperand = operand.slice(0, -1);
            setOperand(newOperand + value);
            return;
        } else {
            //get the last input operator
            //check if last character is number that is ok, but if it is operator stop adding more operators
            if (!Number(operand.slice(-1))) {
                //now if want to change/replace the last operator char with new operator, if that's not a number
                newOperand = operand.slice(0, -1); //getting everthing except the last char
                //checks if the last operand contains a zero and aviod auto removal of zero by operator
                if (Number(operand.slice(-1)) === 0) {
                    setOperand(newOperand + `0` + value);
                    return;
                }

                // value will be any new operator except number
                setOperand(newOperand + value);
                return;
            } else {
                setOperand(operand + value);
                return;
            }
        }

    };

    //   if decimal (".") exists don't repeat
    const handleDecimalClick = (e) => {
            let value = e.target.value;
            if (!(operand === "." || operand.includes("."))) {
                setOperand(operand => operand + value);
            }
        }
        // delete function
    const handleDelete = () => {
        setOperand("");
        setAnswer(0);
        setPreAnswer("");
    };

    // backbutton ac
    const handleBackButton = () => {
        if (operand.length > 0) {
            setOperand((op) => op.slice(0, -1));
        }
    };

    // handle equals button
    const calculate = (e) => {
        try {
            setAnswer(eval(operand));
            setOperand("");
        } catch {
            e.preventDefault();
            setAnswer("");
        }
        if (answer > 0) {
            setPreAnswer(answer);
        }
    };

    //handle percentage button (its just basic, needs to work for advance function)
    const percentage = (e) => {
        try {
            setAnswer(operand / 100);
            setOperand("");
        } catch (error) {
            e.preventDefault();
            setAnswer("");
        }
        if (answer > 0) {
            setPreAnswer(answer);
        }
    };

    return ( <
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
        div className = "ctc c-screen" >
        <
        div className = "btn_history" >
        <
        button className = "c-reverse"
        value = "rv"
        onClick = { handleDelete } >
        <
        i className = "bi bi-backspace" > < /i> <
        /button>

        <
        div className = "c-history-answer" >
        <
        i class = "bi bi-clock-history" > < /i> <
        span > { preAnswer } < /span> <
        /div> <
        /div>

        <
        div className = "c-answer" >
        <
        span > { answer } < /span> <
        /div>

        <
        div className = "ctc c-compute" >
        <
        span > { /*displaying operand once clicked on NumberButton*/ } { operand ? operand : "0" } <
        /span> <
        /div> <
        /div> <
        div className = "c-grid" >
        <
        button type = "button"
        className = "top-btn span-two"
        value = { "ac" }
        onClick = { handleBackButton } >
        ac <
        /button> <
        button type = "button"
        className = "top-btn "
        value = { "%" }
        onClick = {
            () => {
                percentage();
            }
        } >
        %
        <
        /button> <
        button type = "button"
        className = "top-btn special "
        value = { "/" }
        onClick = { handleOperators } >
        / <
        /button> <
        button className = "normal"
        value = { 7 }
        onClick = { handleOperand } >
        7 <
        /button> <
        button className = "normal"
        value = { 8 }
        onClick = { handleOperand } >
        8 <
        /button> <
        button className = "normal"
        value = { 9 }
        onClick = { handleOperand } >
        9 <
        /button> <
        button className = "special"
        value = { "*" }
        onClick = { handleOperators } >
        x <
        /button> <
        button className = "normal"
        value = { 4 }
        onClick = { handleOperand } >
        4 <
        /button> <
        button className = "normal"
        value = { 5 }
        onClick = { handleOperand } >
        5 <
        /button> <
        button className = "normal"
        value = { 6 }
        onClick = { handleOperand } >
        6 <
        /button> <
        button className = "special"
        value = { "-" }
        onClick = { handleOperators } >
        -
        <
        /button> <
        button className = "normal"
        value = { 1 }
        onClick = { handleOperand } >
        1 <
        /button> <
        button className = "normal"
        value = { 2 }
        onClick = { handleOperand } >
        2 <
        /button> <
        button className = "normal"
        value = { 3 }
        onClick = { handleOperand } >
        3 <
        /button> <
        button className = "special"
        value = { "+" }
        onClick = { handleOperators } >
        +
        <
        /button> <
        button className = "span-two normal"
        value = { 0 }
        onClick = { handleOperand } >
        0 <
        /button> <
        button className = "normal"
        value = { "." }
        onClick = { handleDecimalClick } >
        . <
        /button> <
        button className = "special"
        value = "="
        onClick = {
            () => {
                calculate();
            }
        } >
        = <
        /button> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div>
    );
};
export default FirstCalculator;