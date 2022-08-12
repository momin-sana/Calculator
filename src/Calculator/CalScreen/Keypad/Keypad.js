import React, { useContext } from "react";
import { NumberContext } from "../../ContextProvider";
import "./keypad.css";

export default function Keypad({ value }) {
    const { handleCompValue } = useContext(NumberContext);
    const { handleBackButton } = useContext(NumberContext);
    const { doMath } = useContext(NumberContext);
    const { handleSetCalcFunction } = useContext(NumberContext);
    console.log("handleCompValue", handleCompValue);

    return ( <
        div className = "c-grid" >
        <
        button type = "button"
        className = "top-btn span-two"
        value = { "ac" }
        onClick = {
            () => handleBackButton() } >
        ac { " " } <
        /button>{" "} <
        button type = "button"
        className = "top-btn "
        value = { "%" }
        onClick = {
            () => handleSetCalcFunction({ value }) } >
        %
        <
        /button>{" "} <
        button type = "button"
        className = "top-btn special "
        value = { "/" }
        onClick = {
            () => handleSetCalcFunction({ value }) } >
        /{" "} <
        /button>{" "} <
        button className = "normal"
        Key = { 7 }
        value = { 7 }
        onClick = {
            () => handleCompValue({ value }) } >
        7 { " " } <
        /button>{" "} <
        button className = "normal"
        key = { 8 }
        value = { 8 }
        onClick = {
            () => handleCompValue({ value }) } >
        8 { " " } <
        /button>{" "} <
        button className = "normal"
        value = { 9 }
        onClick = {
            () => handleCompValue() } >
        9 { " " } <
        /button>{" "} <
        button className = "special"
        value = { "*" }
        onClick = {
            () => handleSetCalcFunction({ value }) } >
        x { " " } <
        /button>{" "} <
        button className = "normal"
        value = { 4 }
        onClick = {
            () => handleCompValue(value) } >
        4 { " " } <
        /button>{" "} <
        button className = "normal"
        value = { 5 }
        onClick = {
            () => handleCompValue(value) } >
        5 { " " } <
        /button>{" "} <
        button className = "normal"
        value = { 6 }
        onClick = {
            () => handleCompValue(value) } >
        6 { " " } <
        /button>{" "} <
        button className = "special"
        value = { "-" }
        onClick = {
            () => handleSetCalcFunction({ value }) } >
        -
        <
        /button>{" "} <
        button className = "normal"
        value = { 1 }
        onClick = {
            () => handleCompValue(value) } >
        1 { " " } <
        /button>{" "} <
        button className = "normal"
        value = { 2 }
        onClick = {
            () => handleCompValue(value) } >
        2 { " " } <
        /button>{" "} <
        button className = "normal"
        value = { 3 }
        onClick = {
            () => handleCompValue(value) } >
        3 { " " } <
        /button>{" "} <
        button className = "special"
        value = { "+" }
        onClick = {
            () => handleSetCalcFunction({ value }) } >
        +
        <
        /button>{" "} <
        button className = "span-two normal"
        value = { 0 }
        onClick = {
            () => handleCompValue(value) } >
        0 { " " } <
        /button>{" "} <
        button className = "normal"
        value = { "." }
        onClick = {
            () => handleCompValue(value) } >
        . { " " } <
        /button>{" "} <
        button className = "special"
        value = { "=" }
        onClick = {
            () => doMath() } > { " " } = { " " } <
        /button>{" "} <
        /div>
    );
}