import React from "react";

export const Button = ({ keyIndex, onClick, children }) => {
  if (keyIndex === "0-2") {
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
