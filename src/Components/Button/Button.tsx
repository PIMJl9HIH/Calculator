import React from "react";

type ButtonProps = {
  keyIndex: string;
  onClick: any;
  children: React.ReactNode;
};

export const Button = ({
  keyIndex,
  onClick,
  children,
}: ButtonProps): React.ReactElement => {
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
