import React from "react";

const Counter = ({ value, setValue }) => {
  const handleDecrement = () => {
    if (value > 0) setValue(value - 1);
  };

  const handleIncrement = () => {
    setValue(value + 1);
  };

  return (
    <div className="counter">
      <button className="counterBtn" onClick={handleDecrement}>
        -
      </button>
      <span>{value}</span>
      <button className="counterBtn" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default Counter;
