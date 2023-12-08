import { useState } from "react";

function ChildComponent({ parentFunction }) {
  const [data, setData] = useState("");

  const sendDataToParent = () => {
    parentFunction(data);
  };

  return (
    <div>
      <h2>Child Component</h2>
      {data}
      <br />
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={sendDataToParent}>Send Data</button>
    </div>
  );
}

export default ChildComponent;
