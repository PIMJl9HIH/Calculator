import React, { useState } from "react";

import CalcBody from "../Components/CalcBody";
import Output from "../Components/Output";

import { ThemeContext } from "../helpers/Context";

export const Calculator = () => {
  const [prevValue, setPrevValue] = useState("");
  const [curValue, setCurValue] = useState("");
  const [operation, setOperation] = useState("");

  const contextScheme = {
    prevValue,
    setPrevValue,
    curValue,
    setCurValue,
    operation,
    setOperation,
  };

  return (
    <ThemeContext.Provider value={contextScheme}>
      <div className="calculator">
        <Output
          prevValue={prevValue}
          curValue={curValue}
          operation={operation}
        />
        <CalcBody />
      </div>
    </ThemeContext.Provider>
  );
};
