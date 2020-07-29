function clear(setCurValue, setPrevValue, setOperation) {
  setPrevValue("");
  setCurValue("");
  setOperation("");
}

function deleteLastSymbol(curValue, setNumber) {
  return setNumber(curValue.toString().slice(0, -1));
}

function getNumber(item, curValue, setNumber, e) {
  if (item === "." && curValue.includes(".")) return;
  const number = e.target.textContent;
  const result = curValue.toString() + number.toString();

  setNumber(result);
}

function chooseOperation(
  item,
  operation,
  setOperation,
  prevValue,
  setPrevValue,
  curValue,
  setCurValue
) {
  if (curValue === "") return false;

  if (!operation) {
    console.log("net operacii");
    setOperation(item);
    setPrevValue(curValue);
    setCurValue("");
  }

  if (operation) {
    console.log("rewaiiiiii");

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

  if (prevValue !== "") {
  }

  if (!prevValue) {
    setPrevValue(curValue);
  }
  // setCurValue("");
  // setOperation("");
}

function compute(
  item,
  operation,
  setOperation,
  prevValue,
  setPrevValue,
  curValue,
  setCurValue
) {
  let computation;
  let prev = parseFloat(prevValue);
  let cur = parseFloat(curValue);
  if (isNaN(prev) || isNaN(cur)) return;
  switch (operation) {
    case "+":
      setOperation("+");
      computation = prev + cur;
      // setPrevValue(prev + cur);
      break;
    case "-":
      setOperation("-");
      computation = prev - cur;
      // setPrevValue(prev - cur);
      break;
    case "*":
      setOperation("*");
      computation = prev * cur;
      // setPrevValue(prev * cur);
      break;
    case "/":
      setOperation("/");
      computation = prev / cur;
      // setPrevValue(prev / cur);
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
