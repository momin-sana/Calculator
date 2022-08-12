import React from "react";
import "./resultscreen.css";

export default function ResultScreen() {
    return ( <
        div className = "ctc c-screen" >
        <
        div className = "btn_history" >
        <
        button className = "c-reverse"
        value = "rv"
        // onClick={handleDelete}
        >
        <
        i className = "bi bi-backspace" > < /i>{" "} <
        /button>{" "} <
        div className = "c-history-answer" > { " " } <
        i class = "bi bi-clock-history" > < /i>{" "} <
        span > { " " } { /* {prevAnswer} */ }
        1, 234 { " " } <
        /span>{" "} <
        /div>{" "} <
        /div>{" "} <
        div className = "c-answer" >
        <
        span > answer / result < /span>{" "} <
        /div>{" "} <
        /div>
    );
}