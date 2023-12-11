import { useContext } from "react";
import userContext from "../context/userContext";
import "./UserCard.css";

const UserCard = () => {
  const pointer = useContext(userContext);
  return (
    <div className="user-card">
      <h3>User Card</h3>
      <p>Name: {pointer.user.name}</p>
      <p>Email: {pointer.user.email}</p>
      <p>Age: {pointer.user.age}</p>
      <button onClick={pointer.changeUser}>Change User</button>
    </div>
  );
};

export default UserCard;
