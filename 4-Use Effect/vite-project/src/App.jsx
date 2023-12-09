import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://randomuser.me/api/");
      const data = await res.json();
      const jsonString = JSON.stringify(data);
      setUser(jsonString);
    };
    fetchData();
  }, []);

  return <>{user}</>;
}

export default App;

// useEffect(() => {});                 -called after 1st render,  then every render
// useEffect(() => {}, []);             -called after 1st render,  never called again
// useEffect(() => {}, [dependencies]); -called after 1st render,  called if dependencies changes
