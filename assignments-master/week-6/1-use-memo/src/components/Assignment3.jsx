import React, { useState, useMemo } from "react";
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

const Assignment3 = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([
    { name: "Chocolates", value: 10 },
    { name: "Chips", value: 20 },
    { name: "Onion", value: 30 },
    { name: "Tomato", value: 30 },
    // Add more items as needed
  ]);

  // Your code starts here
  const totalValue = useMemo(() => {
    let totalVal = 0;
    console.log("Hii");
    items.map((res) => (totalVal = totalVal + res.value));
    return totalVal;
  }, [items]);

  const addData = () => {
    setItems((prev) => [
      ...prev,
      { name: "Fruits", value: 20 },
      { name: "Cake", value: 10 },
    ]);
  };

  // Your code ends here
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - Price: ${item.value}
          </li>
        ))}
      </ul>
      <button onClick={addData}>Add Data</button>
      <p>Total Value: {totalValue}</p>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
    </div>
  );
};

export default Assignment3;
