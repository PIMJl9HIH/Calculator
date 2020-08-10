import React, { useContext } from "react";

import { ThemeContext } from "../../helpers/Context";

import {
  getNumber,
  deleteLastSymbol,
  compute,
  chooseOperation,
  clear,
} from "../../helpers/Calculate";

export const CalcBody = () => {
  const {
    prevValue,
    setPrevValue,
    curValue,
    setCurValue,
    operation,
    setOperation,
  } = useContext(ThemeContext);

  function action(item: any, e: React.MouseEvent<HTMLButtonElement>) {
    if (parseInt(item) || parseInt(item) === 0 || item === ".")
      return getNumber(item, curValue, setCurValue, e);
    if (item === "leftArrow") return deleteLastSymbol(curValue, setCurValue);

    switch (item) {
      case "+":
      case "-":
      case "*":
      case "/": {
        chooseOperation(
          item,
          operation,
          setOperation,
          prevValue,
          setPrevValue,
          curValue,
          setCurValue
        );
        break;
      }

      case "c": {
        clear(setCurValue, setPrevValue, setOperation);
        break;
      }

      case "=": {
        compute(
          item,
          operation,
          setOperation,
          prevValue,
          setPrevValue,
          curValue,
          setCurValue
        );
        break;
      }

      default:
        return;
    }
  }

  return action;
};
