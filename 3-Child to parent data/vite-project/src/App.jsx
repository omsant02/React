import { useState } from "react";
import "./App.css";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const [childData, setChildData] = useState("No Data");
  const parentFunction = (dataByChild) => {
    setChildData(dataByChild);
  };

  return (
    <div>
      <h1>Parent component</h1>
      <p>Received data from child: {childData}</p>
      <ChildComponent parentFunction={parentFunction} />
    </div>
  );
}

export default ParentComponent;
