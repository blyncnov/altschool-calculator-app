import React from "react";

const Keypads = ({ calculations, result, setResult, setCalculations }) => {
  const buttonValue = [
    "AC",
    "/",
    "*",
    "C",
    "7",
    "8",
    "9",
    "-",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "=",
    "%",
    "0",
    ".",
  ];

  const operand = ["/", "*", "-", ".", "+"];

  const updateCalculatorScreen = (value) => {
    if (
      (operand.includes(value) && operand.includes(calculations.slice(-1))) ||
      (operand.includes(value) && calculations === "")
    ) {
      return;
    } else {
      if (value === "AC") {
        ClearScreen();
      } else if (value === "C") {
        Clear();
      } else if (calculations === 0) {
        return setCalculations(value);
      } else if (value === "=") {
        return setResult(eval(calculations).toString());
      } else {
        return setCalculations(calculations + value);
      }
    }
  };

  const ClearScreen = () => {
    setCalculations(0);
    setResult(0);
  };

  const Clear = () => {
    setCalculations(calculations.slice(0, -1));
  };

  return (
    <>
      <div className="calculator-keypads-container">
        <div className="calculator-keypads-wrapper">
          <div className="group-button">
            {buttonValue.map((value, index) => (
              <button
                id="btn-value"
                key={index}
                onClick={() => updateCalculatorScreen(value)}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Keypads;
