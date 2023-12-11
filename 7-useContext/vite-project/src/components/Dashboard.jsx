import "./Dashboard.css";
import User from "./UserCard";

const Dashboard = ({ user }) => {
  return (
    <div>
      <h2>Dashboard</h2>
      <User user={user} />
    </div>
  );
};

export default Dashboard;
