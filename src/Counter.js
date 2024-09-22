// src/Counter.js
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(1); // Default increment/decrement value

  const handleIncrement = () => {
    setCount(count + Number(inputValue));
  };

  const handleDecrement = () => {
    setCount(count - Number(inputValue));
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        min="1"
      />
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
