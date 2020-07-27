import React, { useContext } from "react";

import { ThemeContext } from "../../helpers/Context";
import Button from "../Button";

const arrBody = [
  ["c", "", "leftArrow", "/"],
  [7, 8, 9, "*"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [".", 0, "", "="],
];

function useTest() {
  const { test } = useContext(ThemeContext);
  return test;
}

const renderButton = (arr, index) => {
  return arr.map((deepItem, deepIndex) => {
    const uniqueKey = `${index}-${deepIndex}`;
    const blabla = useTest();

    if (!deepItem && deepItem !== 0) return false;
    return (
      <Button key={uniqueKey} keyIndex={uniqueKey} onClick={blabla}>
        {deepItem || deepItem === 0 ? deepItem : ""}
      </Button>
    );
  });
};

const renderRow = (arr, index) => {
  if (Array.isArray(arr)) {
    return renderButton(arr, index);
  }
  return <div>something wrong</div>;
};

export const CalcBody = () => {
  const renderBody = arrBody.map((item, index) => {
    return renderRow(item, index);
  });

  return <div className="calculator-body"> {renderBody}</div>;
};
