import React from "react";

export const Button = ({ keyIndex, onClick, children }) => {
  if (children === "leftArrow") {
    return (
      <button className={`button button-${keyIndex}`} onClick={onClick}>
        &larr;
      </button>
    );
  }

  return (
    <button className={`button button-${keyIndex}`} onClick={onClick}>
      {children}
    </button>
  );
};
