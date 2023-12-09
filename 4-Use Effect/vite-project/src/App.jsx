import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect ran");
    return () => {
      console.log("Cleaning mess of useEffect");
      setCount(0);
    };
  }, [count]); // Empty dependency array means this effect runs only on mount and unmount

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
