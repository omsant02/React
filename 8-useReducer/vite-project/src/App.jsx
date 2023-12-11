import { useState } from "react";
import { useReducer } from "react";
import "./App.css";

const reducer = (state, action) => {
  return { count: state.count + 1 };
};

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increment = () => {
    dispatch();
  };
  return (
    <div>
      <p>Count : {state.count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
