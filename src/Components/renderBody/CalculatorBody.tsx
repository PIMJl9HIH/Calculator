import React from "react";

import Button from "../Button";

import CalcBody from "../../Container/CalcBody";

const deleteArrow = "leftArrow";

const arrBody = [
  ["c", "", deleteArrow, "/"],
  [7, 8, 9, "*"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [".", 0, "", "="],
];

type arrItemType = number | string;

const renderButton = (
  arr: Array<arrItemType>,
  index: number,
  actionCompute: any
) => {
  return arr.map((deepItem: arrItemType, deepIndex: number) => {
    const uniqueKey = `${index}-${deepIndex}`;
    if (!deepItem && deepItem !== 0) return false;

    return (
      <Button
        key={uniqueKey}
        keyIndex={uniqueKey}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
          actionCompute(deepItem, e)
        }
      >
        {deepItem || deepItem === 0 ? deepItem : ""}
      </Button>
    );
  });
};

const RenderBody = () => {
  let action = CalcBody();
  return arrBody.map((item, index) => {
    if (Array.isArray(item)) {
      return renderButton(item, index, action);
    }
    return <div>something wrong</div>;
  });
};
export const CalculatorBody = () => {
  return <div className="calculator-body"> {RenderBody()}</div>;
};
