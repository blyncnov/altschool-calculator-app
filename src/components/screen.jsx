import React from "react";

const Screen = ({ calculations, result, setCalculations }) => {
  return (
    <>
      <div className="calculator-screen">
        <div className="calculator-screen-wrapper">
          <div className="calculations">
            <h5 className="calculator-multi-op">{calculations || 0}</h5>
            <h5 className="calculator-final-answer">
              <span className="calculator-answer-span">ANS:</span> {result || 0}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Screen;
