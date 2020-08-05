type stringFuncParam = (a: string) => string;
function clear(
  setCurValue: stringFuncParam,
  setPrevValue: stringFuncParam,
  setOperation: stringFuncParam
) {
  setPrevValue("");
  setCurValue("");
  setOperation("");
}

function deleteLastSymbol(curValue: string | number, setNumber: any) {
  return setNumber(curValue.toString().slice(0, -1));
}

function getNumber(
  item: any,
  curValue: any,
  setNumber: any,
  e: React.MouseEvent<HTMLButtonElement>
) {
  if (item === "." && curValue.includes(".")) return;
  const number = (e.target as HTMLButtonElement).textContent;
  const result = curValue.toString() + number!.toString();

  setNumber(result);
}

function chooseOperation(
  item: string | number,
  operation: any,
  setOperation: any,
  prevValue: any,
  setPrevValue: any,
  curValue: any,
  setCurValue: any
): any {
  if (curValue === "") return false;

  if (!operation) {
    setOperation(item);
    setPrevValue(curValue);
    setCurValue("");
  }

  if (operation) {
    compute(
      item,
      operation,
      setOperation,
      prevValue,
      setPrevValue,
      curValue,
      setCurValue
    );

    setOperation(item);
    setCurValue("");
  }

  if (!prevValue) {
    setPrevValue(curValue);
  }
}

function compute(
  item: string | number,
  operation: any,
  setOperation: any,
  prevValue: any,
  setPrevValue: any,
  curValue: any,
  setCurValue: any
) {
  let computation;
  let prev = parseFloat(prevValue);
  let cur = parseFloat(curValue);
  if (isNaN(prev) || isNaN(cur)) return;
  switch (operation) {
    case "+":
      setOperation("+");
      computation = prev + cur;
      break;
    case "-":
      setOperation("-");
      computation = prev - cur;
      break;
    case "*":
      setOperation("*");
      computation = prev * cur;
      break;
    case "/":
      setOperation("/");
      computation = prev / cur;
      break;
    default:
      return;
  }

  if (item === "=") {
    setCurValue(computation);
    setPrevValue("");
  } else {
    setPrevValue(computation);
  }
  setOperation("");
}
export { getNumber, deleteLastSymbol, compute, chooseOperation, clear };
