import { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState("");

  const fetchData = async () => {
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();
    const jsonString = JSON.stringify(data);
    setUser(jsonString);
  };
  fetchData();

  return <>{user}</>;
}

export default App;
