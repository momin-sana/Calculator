import React, { useContext, useState } from "react";
import { NumberContext } from "../../ContextProvider";
import "./keypad.css";

export default function Keypad(keyValue) {
    const { handleCompValue } = useContext(NumberContext);
    console.log("handleCompValue", handleCompValue);

    return ( <
        div className = "c-grid" >
        <
        button type = "button"
        className = "top-btn span-two"
        keyValue = "ac"
        onClick = {
            () => handleCompValue(keyValue) } >
        ac { " " } <
        /button>{" "}

        <
        button type = "button"
        className = "top-btn "
        keyValue = "%"
        onClick = {
            () => handleCompValue(keyValue) } >
        %
        <
        /button>{" "}

        <
        button type = "button"
        className = "top-btn special "
        keyValue = "/"
        onClick = {
            () => handleCompValue(keyValue) } >
        / <
        /button>{" "}

        <
        button className = "normal"
        keyValue = { 7 }
        onClick = {
            () => handleCompValue(keyValue) } >
        7 { " " } <
        /button>{" "}

        <
        button className = "normal"
        keyValue = { 8 }
        onClick = {
            () => handleCompValue(keyValue) } >
        8 { " " } <
        /button>{" "}

        <
        button className = "normal"
        keyValue = { 9 }
        onClick = {
            () => handleCompValue(keyValue) } >
        9 { " " } <
        /button>{" "}

        <
        button className = "special"
        keyValue = "*"
        onClick = {
            () => handleCompValue(keyValue) } >
        x { " " } <
        /button>{" "}

        <
        button className = "normal"
        keyValue = { 4 }
        onClick = {
            () => handleCompValue(keyValue) } >
        4 { " " } <
        /button>{" "}

        <
        button className = "normal"
        keyValue = { 5 }
        onClick = {
            () => handleCompValue(keyValue) } >
        5 { " " } <
        /button>{" "}

        <
        button className = "normal"
        keyValue = { 6 }
        onClick = {
            () => handleCompValue(keyValue) } >
        6 { " " } <
        /button>{" "}

        <
        button className = "special"
        keyValue = "-"
        onClick = {
            () => handleCompValue(keyValue) } >
        -
        <
        /button>{" "}

        <
        button className = "normal"
        keyValue = { 1 }
        onClick = {
            () => handleCompValue(keyValue) } >
        1 { " " } <
        /button>{" "}

        <
        button className = "normal"
        keyValue = { 2 }
        onClick = {
            () => handleCompValue(keyValue) } >
        2 { " " } <
        /button>{" "}

        <
        button className = "normal"
        keyValue = { 3 }
        onClick = {
            () => handleCompValue(keyValue) } >
        3 { " " } <
        /button>{" "}

        <
        button className = "special"
        keyValue = "+"
        onClick = {
            () => handleCompValue(keyValue) } >
        +
        <
        /button>{" "}

        <
        button className = "span-two normal"
        keyValue = { 0 }
        onClick = {
            () => handleCompValue(keyValue) } >
        0 { " " } <
        /button>{" "}

        <
        button className = "normal"
        keyValue = "."
        onClick = {
            () => handleCompValue(keyValue) } >
        . { " " } <
        /button>{" "}

        <
        button className = "special"
        keyValue = "="
        onClick = {
            () => handleCompValue(keyValue) } >
        = { " " } <
        /button> <
        /div>
    );
}