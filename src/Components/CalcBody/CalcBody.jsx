import React, { useContext } from "react";

import { ThemeContext } from "../../helpers/Context";

import {
  getNumber,
  deleteLastSymbol,
  compute,
  chooseOperation,
  clear,
} from "../../helpers/Calculate";

import Button from "../Button";

const deleteArrow = "leftArrow";

const arrBody = [
  ["c", "", deleteArrow, "/"],
  [7, 8, 9, "*"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [".", 0, "", "="],
];

const renderButton = (arr, index, actionCompute) => {
  return arr.map((deepItem, deepIndex) => {
    const uniqueKey = `${index}-${deepIndex}`;
    if (!deepItem && deepItem !== 0) return false;

    return (
      <Button
        key={uniqueKey}
        keyIndex={uniqueKey}
        onClick={(e) => actionCompute(deepItem, e)}
      >
        {deepItem || deepItem === 0 ? deepItem : ""}
      </Button>
    );
  });
};

export const CalcBody = () => {
  const {
    prevValue,
    setPrevValue,
    curValue,
    setCurValue,
    operation,
    setOperation,
  } = useContext(ThemeContext);

  function action(item, e) {
    if (parseInt(item) || parseInt(item) === 0 || item === ".")
      return getNumber(item, curValue, setCurValue, e);
    if (item === deleteArrow) return deleteLastSymbol(curValue, setCurValue);

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

  const renderBody = arrBody.map((item, index) => {
    if (Array.isArray(item)) {
      return renderButton(item, index, action);
    }
    return <div>something wrong</div>;
  });

  return <div className="calculator-body"> {renderBody}</div>;
};
