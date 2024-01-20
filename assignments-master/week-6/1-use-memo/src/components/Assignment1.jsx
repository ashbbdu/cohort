import { useMemo } from "react";
import { useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input.
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
  const [input, setInput] = useState(1);
  const [count , setCount] = useState(0)
  // Your solution starts here
  const inputValue = useMemo(() => {
    let expensiveValue = 1;
    for(let i = 1;i <= input; i++) {
        expensiveValue = expensiveValue * i;
        console.log("inside loop"); 
    }
    console.log("outside loop"); 
    return expensiveValue
  },[input])
  
  // Your solution ends here

  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <p>Calculated Value: {inputValue}</p>
      <div>{count}</div>
      <button onClick={() => setCount(prev => prev + 1)}>Updtate Counter</button>
    </div>
  );
}
