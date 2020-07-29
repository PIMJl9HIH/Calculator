import React from "react";

export const Output = ({ prevValue, curValue, operation }) => {
  return (
    <div className="output">
      <div className="output-prev">
        {prevValue} {operation}
      </div>
      <div className="output-curr">{curValue}</div>
    </div>
  );
};
