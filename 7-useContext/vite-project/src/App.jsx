import Dashboard from "./components/Dashboard";
import "./App.css";

const user = {
  name: "John Doe",
  email: "john.doe@example.com",
  age: 30,
};

const App = () => {
  return (
    <div className="app">
      <h1>User Dashboard</h1>
      <Dashboard user={user} />
    </div>
  );
};

export default App;
