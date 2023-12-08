import "./App.css";
import Demo from "./Demo";
import Home from "./Home";

function App() {
  let a = 5;
  return (
    <>
      <p>react</p>
      <Demo message={a} />
    </>
  );
}

export default App;
