import React from "react";

type outputType = {
  prevValue: string;
  curValue: string;
  operation: string;
};

export const Output: React.FC<outputType> = ({
  prevValue,
  curValue,
  operation,
}) => {
  return (
    <div className="output">
      <div className="output-prev">
        {prevValue} {operation}
      </div>
      <div className="output-curr">{curValue}</div>
    </div>
  );
};
