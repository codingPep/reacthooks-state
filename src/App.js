import React, { useState, useEffect } from "react";
import "./App.css";
const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header>
        <h1>Count Application</h1>
      </header>
      <h2>current value of count is {count}</h2>
      <button onClick={() => setCount(0)}>Reset Count</button>
      <button
        onClick={() =>
          count > 10
            ? alert("You cannot add more than 10")
            : setCount(count + 1)
        }
      >
        + Count
      </button>
      <button
        onClick={() =>
          count <= 0
            ? alert("you cannot decrease less than zero")
            : setCount(count - 1)
        }
      >
        - Count
      </button>
    </div>
  );
};

export default App;
