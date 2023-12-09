import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log("UseEffect called");
  }, [count1, count2]);

  return (
    <>
      <h2>{count1}</h2>
      <button onClick={() => setCount1(count1 + 1)}>Increment Count 1</button>
      <h2>{count2}</h2>
      <button onClick={() => setCount2(count2 + 1)}>Increment Count 2</button>
    </>
  );
}

export default App;

// useEffect(() => {});                 -called after 1st render,  then every render
// useEffect(() => {}, []);             -called after 1st render,  never called again
// useEffect(() => {}, [dependencies]); -called after 1st render,  called if dependencies changes
