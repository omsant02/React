import { useState } from "react";
import UserContext from "./userContext";
const UserInfo = ({ children }) => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    age: 30,
  });

  const changeUser = () => {
    setUser({
      name: "XYZ",
      email: "xyz@example.com",
      age: 20,
    });
  };

  return (
    <UserContext.Provider value={{ user, changeUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserInfo;
