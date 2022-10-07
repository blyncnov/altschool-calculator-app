import React, { useState } from "react";

// CSS styles for calculator body element
import "../calculator.scss";

// calculator-app external components
import Screen from "../components/screen";
import Keypads from "../components/keypads";

// calculator-app components
const CalculatorBody = () => {
  const [calculations, setCalculations] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <>
      <div className="calculator-body">
        <Screen
          setCalculations={setCalculations}
          setResult={setResult}
          calculations={calculations}
          result={result}
        />
        <Keypads
          setCalculations={setCalculations}
          setResult={setResult}
          calculations={calculations}
          result={result}
        />
      </div>
    </>
  );
};

export default CalculatorBody;
