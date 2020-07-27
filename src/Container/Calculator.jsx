import React, { useState } from "react";

import CalcBody from "../Components/CalcBody";
import Output from "../Components/Output";

import { ThemeContext } from "../helpers/Context";

function clicker() {
  console.log("fffffffffffff");
}

export const Calculator = () => {
  // const [state, setState] = useState(0);
  // const [prevValue, setPrevValue] = useState("");
  // const [nextValue, setNextValue] = useState("");

  return (
    <ThemeContext.Provider value={{ test: clicker }}>
      <div className="calculator">
        <Output />
        <CalcBody />
      </div>
    </ThemeContext.Provider>
  );
};
