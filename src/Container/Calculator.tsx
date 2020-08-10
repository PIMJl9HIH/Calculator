import React, { useState } from "react";

import RenderBody from "../Components/renderBody";
import Output from "../Components/Output";

import { ThemeContext } from "../helpers/Context";

type stringType = string;

export const Calculator = () => {
  const [prevValue, setPrevValue] = useState<stringType>("");
  const [curValue, setCurValue] = useState<stringType>("");
  const [operation, setOperation] = useState<stringType>("");

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
        <RenderBody />
      </div>
    </ThemeContext.Provider>
  );
};
