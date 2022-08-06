import React, { useContext, useState } from "react";
import { NumberContext } from "../../ContextProvider";
import "./keypad.css";

export default function Keypad({ keyvalue }) {
    const { handleCompValue } = useContext(NumberContext);
    console.log("handleCompValue", handleCompValue);


    return ( <
        div className = "c-grid" >
        <
        button type = "button"
        className = "top-btn span-two"
        keyvalue = "ac"
        onClick = {
            () => handleCompValue(keyvalue) } >
        ac { " " } <
        /button>{" "} <
        button type = "button"
        className = "top-btn "
        keyvalue = "%"
        onClick = {
            () => handleCompValue(keyvalue) } >
        %
        <
        /button>{" "} <
        button type = "button"
        className = "top-btn special "
        keyvalue = "/"
        onClick = {
            () => handleCompValue(keyvalue) } >
        /{" "} <
        /button>{" "} <
        button className = "normal"
        keyvalue = { 7 }
        onClick = {
            () => handleCompValue(keyvalue = `${keyvalue}`) } >
        7 { " " } <
        /button>{" "} <
        button className = "normal"
        keyvalue = { 8 }
        onClick = {
            () => handleCompValue(keyvalue) } >
        8 { " " } <
        /button>{" "} <
        button className = "normal"
        keyvalue = { 9 }
        onClick = {
            () => handleCompValue(keyvalue) } >
        9 { " " } <
        /button>{" "} <
        button className = "special"
        keyvalue = "*"
        onClick = {
            () => handleCompValue(keyvalue) } >
        x { " " } <
        /button>{" "} <
        button className = "normal"
        keyvalue = { 4 }
        onClick = {
            () => handleCompValue(keyvalue) } >
        4 { " " } <
        /button>{" "} <
        button className = "normal"
        keyvalue = { 5 }
        onClick = {
            () => handleCompValue(keyvalue) } >
        5 { " " } <
        /button>{" "} <
        button className = "normal"
        keyvalue = { 6 }
        onClick = {
            () => handleCompValue(keyvalue) } >
        6 { " " } <
        /button>{" "} <
        button className = "special"
        keyvalue = "-"
        onClick = {
            () => handleCompValue(keyvalue) } >
        -
        <
        /button>{" "} <
        button className = "normal"
        keyvalue = { 1 }
        onClick = {
            () => handleCompValue(keyvalue) } >
        1 { " " } <
        /button>{" "} <
        button className = "normal"
        keyvalue = { 2 }
        onClick = {
            () => handleCompValue(keyvalue) } >
        2 { " " } <
        /button>{" "} <
        button className = "normal"
        keyvalue = { 3 }
        onClick = {
            () => handleCompValue(keyvalue) } >
        3 { " " } <
        /button>{" "} <
        button className = "special"
        keyvalue = "+"
        onClick = {
            () => handleCompValue(keyvalue) } >
        +
        <
        /button>{" "} <
        button className = "span-two normal"
        keyvalue = { 0 }
        onClick = {
            () => handleCompValue(keyvalue) } >
        0 { " " } <
        /button>{" "} <
        button className = "normal"
        keyvalue = "."
        onClick = {
            () => handleCompValue(keyvalue) } >
        . { " " } <
        /button>{" "} <
        button className = "special"
        keyvalue = "="
        onClick = {
            () => handleCompValue(keyvalue) } >
        = { " " } <
        /button>{" "} <
        /div>
    );
}