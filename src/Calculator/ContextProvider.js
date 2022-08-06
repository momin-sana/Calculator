import React, { createContext, useState } from "react";


export const NumberContext = createContext();

const ContextProvider = (props) => {
        const [number, setNumber] = useState("");
        const [storedNumber, setStoredNumber] = useState('');
        const [functionType, setFunctionType] = useState('');

        const handleCompValue = (e) => {
            try {
                if (!number.includes(".") || e !== ".") {
                    setNumber(`${(number + e).replace("[/^0+/]", "")}`);
                }
            } catch (error) {
                e.preventDefault();
                setNumber("");
            }
        };
        const handleSetStoredValue = () => {
            setStoredNumber(number);
            setNumber('');
        };

        const handleClearValue = () => {
            setNumber('');
            setStoredNumber('');
            setFunctionType('');
        };

        const handleBackButton = () => {
            if (number !== '') {
                const deletedNumber = number.slice(0, number.length - 1);
                setNumber(deletedNumber);
            }
        };

        const handleSetCalcFunction = type => {
            if (number) {
                setFunctionType(type);
                handleSetStoredValue();
            }
            if (storedNumber) {
                setFunctionType(type);
            }
        };
        const doMath = () => {
                if (number && storedNumber) {
                    switch (functionType) {
                        case '+':
                            setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) + parseFloat(number)) * 100}`) / 100}`);
          break;
        case '-':
          setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) - parseFloat(number)) * 1000}`) / 1000}`);
          break;
        case '/':
          setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) / parseFloat(number)) * 1000}`) / 1000}`);
          break;
        case '*':
          setStoredNumber(`${Math.round(`${parseFloat(storedNumber) * parseFloat(number) * 1000}`) / 1000}`);
          break;
        default:
          break;
      }
      setNumber('');
    }
  };
  console.log("handleCompValue", handleCompValue);
  console.log("number", number);
  console.log("props",props);
  return (
    <NumberContext.Provider
      value={{
        handleCompValue,
        doMath,
        functionType,
        handleBackButton,
        handleClearValue,
        handleSetCalcFunction,
        handleSetStoredValue,
        setNumber,
        storedNumber,
        number,
      }}
    >
      {" "}
      {props.children}{" "}
    </NumberContext.Provider>
  );
};
export { ContextProvider };