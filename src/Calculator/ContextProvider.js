import React, { useState } from "react";

export const NumberContext = React.createContext();

const ContextProvider = (props) => {
    const [number, setNumber] = useState("");
    const handleCompValue = (num) => {
        try {
            if (!number.includes('.') || num !== '.') {
                setNumber(`${(number + num).replace('[/^0+/]', '')}`);
            }
        } catch (error) {
            num.preventDefault();
            setNumber("")
        }

    }
    console.log("handleCompValue", handleCompValue);
    console.log("number", number);
    return ( <
        NumberContext.Provider value = {
            {
                handleCompValue,
                number
            }
        } > { props.children } <
        /NumberContext.Provider>
    );
};
export { ContextProvider };